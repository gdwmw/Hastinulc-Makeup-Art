import { useGlobalStates } from "@/src/context";
import { en, id } from "@/src/i18n";

import { setCookie } from "../cookies";

const SUPPORTED_LANGUAGES = {
  EN: en,
  ID: id,
} as const;

export type TLanguage = keyof typeof SUPPORTED_LANGUAGES;

export type TTranslations = typeof en;

export const useLanguage = () => {
  const { language, setLanguage } = useGlobalStates();

  const set = (lang: TLanguage) => {
    if (lang in SUPPORTED_LANGUAGES) {
      setLanguage(lang);
      localStorage.setItem("language", lang);
      setCookie({ name: "language", value: lang });
    }
  };

  const get = (lang?: string | TLanguage | undefined): TTranslations => {
    if (language) {
      return SUPPORTED_LANGUAGES[language];
    }

    if (lang && lang in SUPPORTED_LANGUAGES) {
      return SUPPORTED_LANGUAGES[lang as TLanguage];
    }

    return id;
  };

  return { get, set };
};
