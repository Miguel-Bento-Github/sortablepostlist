import NotFoundView from "@/views/NotFoundView.vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { parameters } from "./config";

const meta: Meta<typeof NotFoundView> = {
  title: "Design System/View",
  component: NotFoundView,
  parameters
};

export default meta;
type Story = StoryObj<typeof NotFoundView>;

export const NotFound: Story = {};
