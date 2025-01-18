import { defaultLang, translations } from "./translations"
import type { Language } from "./types"

export const getLangFromUrl = (url: URL) => {
  const [, lang] = url.pathname.split('/')

  if(Object.keys(translations).includes(lang)) {
    return lang as Language
  }

  return defaultLang
}

export const useTranslations = (lang: Language) => {
  return function t(key: keyof typeof translations[typeof defaultLang]) {
    return translations[lang][key] ?? translations[defaultLang][key]
  }
}