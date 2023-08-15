import type { Meta, StoryObj } from "@storybook/vue3";
import PostControl from "./PostControl.vue";

const meta: Meta<typeof PostControl> = {
  title: "Design System/Post Control",
  component: PostControl,
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof PostControl>;

export const Default: Story = {};
export const Reversed: Story = { args: { isReversed: true } };
