import i18n from "@/i18n";
import type { LocaleCode } from "@/types/localeCode";
import { computed } from "vue";

export const globalLocale = computed({
  get() {
    return i18n.global.locale.value as LocaleCode;
  },
  set(newValue: LocaleCode) {
    i18n.global.locale.value = newValue;
  }
});
