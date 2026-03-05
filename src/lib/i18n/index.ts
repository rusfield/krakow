import en from './en';
import no from './no';
import pl from './pl';

export type { Dictionary } from './types';

export type SupportedLang = 'en' | 'no' | 'pl';

export const supportedLangs: SupportedLang[] = ['en', 'no', 'pl'];

export const dictionaries = { en, no, pl } satisfies Record<SupportedLang, (typeof en)>;

export function isSupportedLang(lang: string): lang is SupportedLang {
	return supportedLangs.includes(lang as SupportedLang);
}
