import { mkdir, readdir, rename, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const projectRoot = process.cwd();
const imagesRoot = path.join(projectRoot, 'static', 'images');
const thumbsRoot = path.join(imagesRoot, 'thumbs');

const IMAGE_PATTERN = /\.(jpe?g)$/i;
const FULL_SIZE_MAX = 1800;
const THUMB_SIZE_MAX = 720;
const FULL_QUALITY = 78;
const THUMB_QUALITY = 72;

async function walk(dir) {
	const entries = await readdir(dir, { withFileTypes: true });
	const files = await Promise.all(
		entries.map(async (entry) => {
			const fullPath = path.join(dir, entry.name);
			if (entry.isDirectory()) {
				if (fullPath === thumbsRoot) return [];
				return walk(fullPath);
			}
			return IMAGE_PATTERN.test(entry.name) ? [fullPath] : [];
		})
	);

	return files.flat();
}

function toThumbPath(imagePath) {
	const relativePath = path.relative(imagesRoot, imagePath);
	return path.join(thumbsRoot, relativePath).replace(IMAGE_PATTERN, '.webp');
}

async function ensureDir(filePath) {
	await mkdir(path.dirname(filePath), { recursive: true });
}

async function optimizeOriginal(imagePath) {
	const tempPath = `${imagePath}.tmp.jpg`;

	await sharp(imagePath)
		.rotate()
		.resize(FULL_SIZE_MAX, FULL_SIZE_MAX, {
			fit: 'inside',
			withoutEnlargement: true
		})
		.jpeg({
			quality: FULL_QUALITY,
			progressive: true,
			mozjpeg: true
		})
		.toFile(tempPath);

	await rename(tempPath, imagePath);
}

async function writeThumb(imagePath) {
	const thumbPath = toThumbPath(imagePath);
	await ensureDir(thumbPath);

	await sharp(imagePath)
		.rotate()
		.resize(THUMB_SIZE_MAX, THUMB_SIZE_MAX, {
			fit: 'inside',
			withoutEnlargement: true
		})
		.webp({
			quality: THUMB_QUALITY,
			effort: 5
		})
		.toFile(thumbPath);
}

async function main() {
	const imagePaths = await walk(imagesRoot);
	let beforeBytes = 0;
	let afterBytes = 0;

	for (const imagePath of imagePaths) {
		const before = await stat(imagePath);
		beforeBytes += before.size;

		await optimizeOriginal(imagePath);
		await writeThumb(imagePath);

		const after = await stat(imagePath);
		const thumb = await stat(toThumbPath(imagePath));
		afterBytes += after.size + thumb.size;

		console.log(
			`${path.relative(projectRoot, imagePath)}: ${Math.round(before.size / 1024)}KB -> ${Math.round(
				after.size / 1024
			)}KB (+${Math.round(thumb.size / 1024)}KB thumb)`
		);
	}

	console.log(
		`\nTotal: ${Math.round(beforeBytes / 1024 / 1024)}MB originals -> ${Math.round(
			afterBytes / 1024 / 1024
		)}MB optimized + thumbs`
	);
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
