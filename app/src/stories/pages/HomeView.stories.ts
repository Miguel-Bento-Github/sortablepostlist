import HomeView from "@/views/HomeView.vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { useQueryClient } from "@tanstack/vue-query";
import { parameters } from "./config";

const meta: Meta<typeof HomeView> = {
  title: "Component/View",
  component: HomeView,
  parameters
};

export default meta;
type Story = StoryObj<typeof HomeView>;

export const Home: Story = {
  render: () => ({
    components: { HomeView },
    setup() {
      /**
       * Allows story to reload on story navigation
       */
      const queryClient = useQueryClient();
      queryClient.clear();
    },
    template: `<HomeView v-bind="args" />`
  })
};
