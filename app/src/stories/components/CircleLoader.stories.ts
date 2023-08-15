import type { Meta, StoryObj } from "@storybook/vue3";
import CircleLoader from "./CircleLoader.vue";

const meta: Meta<typeof CircleLoader> = {
  title: "Design System/Loader",
  component: CircleLoader,
  parameters: { backgrounds: { disable: true } }
};

export default meta;
type Story = StoryObj<typeof CircleLoader>;

export const Loader: Story = {
  render: () => ({
    components: { CircleLoader },
    template: `<CircleLoader v-bind="args" />`
  })
};
