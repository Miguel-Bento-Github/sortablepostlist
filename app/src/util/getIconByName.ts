import IconIdentity from "@/assets/svg/interface/IconIdentity.vue";
import { h, VNode } from "vue";

/**
 * The following modifiers are supported:
 * - `.top` | `.right` | `.bottom` | `.left` to change the direction.
 * @param identifier Name of the icon with optional modifiers.
 * @returns A virtual DOM node of the icon asset that matches the identifier.
 */
export const getIconByName = (identifier?: string): VNode => {
  let IconComponent = IconIdentity as unknown as VNode;
  if (!identifier) return h(IconComponent);

  const [name] = identifier.split(".");
  const normalizedName = name.replaceAll(/[\s-_]/g, "").toLowerCase();

  const iconAssets = import.meta.glob<{ default: VNode }>(
    "@/assets/svg/interface/Icon*.vue",
    {
      eager: true
    }
  );
  for (const [path, component] of Object.entries(iconAssets)) {
    const [, match] = path.match(/Icon([A-Za-z]+)\.vue$/) || [];

    if (match && normalizedName === match.toLowerCase()) {
      IconComponent = component.default as VNode;
    }
  }

  return h(IconComponent);
};
