import NavigationLayout from "@/layouts/NavigationLayout.vue";
import HomeView from "@/views/HomeView.vue";
import { StoryFn } from "@storybook/vue3";
import { useQueryClient } from "@tanstack/vue-query";

const Template: StoryFn = (args) => ({
  components: { HomeView, NavigationLayout },
  setup() {
    const queryClient = useQueryClient();
    queryClient.clear();

    return { args };
  },
  template: `<NavigationLayout><HomeView /></NavigationLayout>`
});

export const Default: StoryFn = Template.bind({});

export default {
  title: "Design System/Pages/Home",
  component: HomeView
};
