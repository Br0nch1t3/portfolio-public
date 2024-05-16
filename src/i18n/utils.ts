import { en } from "./en";
import { fr } from "./fr";

const defaultLang = "fr"

export const ui = {
    fr,
    en
}

export const langs = Object.keys(ui);

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}