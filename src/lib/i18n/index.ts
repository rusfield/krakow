import en from './en';
import pl from './pl';

export type { Dictionary } from './types';

export type SupportedLang = 'en' | 'pl';

export const supportedLangs: SupportedLang[] = ['en', 'pl'];

export const dictionaries = { en, pl } satisfies Record<SupportedLang, typeof en>;

export function isSupportedLang(lang: string): lang is SupportedLang {
	return supportedLangs.includes(lang as SupportedLang);
}
