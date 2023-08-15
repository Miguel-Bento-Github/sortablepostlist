import { globalLocale } from "@/const/globalLocale";
import { LOCALE } from "@/const/readonly/locale";
import { LocaleCode } from "@/types/localeCode";

export const applyLocale = (
  localeTag?: LocaleCode,
  fallbackLocale?: LocaleCode
) => {
  if (!localeTag) {
    localeTag = (localStorage.getItem("locale") ||
      fallbackLocale ||
      "en-GB") as LocaleCode;
  }

  // Update html element attributes
  const htmlElement = document.documentElement;
  htmlElement.setAttribute("lang", localeTag);
  htmlElement.setAttribute("dir", LOCALE[localeTag].dir);

  // Update i18n global locale
  globalLocale.value = localeTag;
};
