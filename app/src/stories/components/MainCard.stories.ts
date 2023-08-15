import type { Meta, StoryObj } from "@storybook/vue3";
import MainCard from "./MainCard.vue";

const meta: Meta<typeof MainCard> = {
  title: "Design System",
  component: MainCard,
  argTypes: {
    tag: {
      options: ["div", "section", "blockquote", "ul"],
      control: { type: "radio" }
    }
  }
};

export default meta;
type Story = StoryObj<typeof MainCard>;

export const Card: Story = {
  render: (args) => ({
    setup() {
      return { args };
    },
    components: { MainCard },
    template: `<MainCard v-bind="args">Hello, I'm a card</MainCard>`
  })
};
