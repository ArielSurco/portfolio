import type { Language, Translations } from "../types";
import { translations as ESTranslations } from "./es";
import { translations as ENTranslations } from "./en";

export const defaultLang: Language = 'es'

export const translations = {
  es: ESTranslations,
  en: ENTranslations
} as const satisfies Record<Language, Translations>