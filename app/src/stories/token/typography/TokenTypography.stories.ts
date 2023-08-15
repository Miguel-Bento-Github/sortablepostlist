import type { Meta, StoryObj } from "@storybook/vue3";
import TokenTypography from "./TokenTypography.vue";

const meta: Meta<typeof TokenTypography> = {
  title: "Design System/Typography",
  component: TokenTypography,
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof TokenTypography>;

export const Header1: Story = {
  args: {
    message: "Header 1",
    type: "header-1"
  }
};

export const Header2: Story = {
  args: {
    message: "Header 2",
    type: "header-2"
  }
};

export const BodyText: Story = {
  args: {
    message: "Body text",
    type: "body"
  }
};
