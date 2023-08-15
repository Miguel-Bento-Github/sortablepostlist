import { onBeforeUnmount, onMounted, ref } from "vue";
import type { Ref } from "vue";

/**
 * Creates a new `IntersectionObserver`. It automatically stops observing when the component is unmounted.
 * @param rootElement A `ref` to a template element. Usually a scroll container.
 * @param callback Will be called when the percentage of the target element is visible crosses a threshold.
 * @param options Accepts a `threshold` (defaults to 1.0) and a `rootMargin`.
 * @returns The `IntersectionObserver` wrapped in a Ref.
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 */
export const useIntersectionObserver = (
  rootElement: Ref,
  callback: IntersectionObserverCallback,
  options?: Omit<IntersectionObserverInit, "root">
) => {
  const observer = ref<IntersectionObserver>();

  onMounted(() => {
    const defaultOptions = {
      root: rootElement.value,
      threshold: 1.0
    };

    observer.value = new IntersectionObserver(callback, {
      ...defaultOptions,
      ...options
    });
  });

  onBeforeUnmount(() => {
    observer.value?.disconnect();
    observer.value = undefined;
  });

  return observer;
};
