import type { LocaleCode } from "@/types/localeCode";
import enGB from "@/locales/en-GB.json";
import messages from "@intlify/unplugin-vue-i18n/messages";
import { createI18n, IntlDateTimeFormat } from "vue-i18n";
import { LOCALE } from "./const/readonly/locale";

/**
 * The schema is defined in `@/locales/en-GB.json`
 */
type MessageSchema = typeof enGB;

const createDatetimeFormats = (): Record<LocaleCode, IntlDateTimeFormat> => {
  const defaultFormats: IntlDateTimeFormat = {
    dateShortest: { year: "numeric", month: "numeric", day: "numeric" },
    timeShortest: { hour: "numeric", minute: "numeric" }
  };

  return Object.fromEntries(
    Object.keys(LOCALE).map((locale) => [locale, defaultFormats])
  ) as Record<LocaleCode, IntlDateTimeFormat>;
};

export default createI18n<[MessageSchema], LocaleCode, false>({
  messages,
  legacy: false,
  locale: localStorage.getItem("locale") || "en-GB",
  fallbackLocale: "en-GB",
  datetimeFormats: createDatetimeFormats()
});
