import {
  QueryClient,
  VueQueryPlugin,
  type VueQueryPluginOptions
} from "@tanstack/vue-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 15 // 5 minutes, approximate session
    }
  }
});

const vueQueryPluginOptions: VueQueryPluginOptions = { queryClient };
export const vueQueryPlugin = [VueQueryPlugin, vueQueryPluginOptions] as const;
