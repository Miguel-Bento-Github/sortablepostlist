import { GlobalNavigationRoute } from "@/router/routes.enum";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import type { RouteLocationRaw } from "vue-router";

interface MenuItem {
  label: string;
  to: RouteLocationRaw;
}

export const useMenuItems = () => {
  const { t } = useI18n();

  const menuItems = computed((): MenuItem[] => [
    {
      label: t("home.title"),
      to: { name: GlobalNavigationRoute.Home }
    }
  ]);

  return menuItems;
};
