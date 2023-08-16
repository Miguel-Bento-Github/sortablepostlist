import type { Meta, StoryObj } from "@storybook/vue3";
import MainCard from "./MainCard.vue";

const meta: Meta<typeof MainCard> = {
  title: "Component",
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
      const style = `'height: 150px; width:100px;'`;
      return { args, style };
    },
    components: { MainCard },
    template: `<div :style="style"><MainCard v-bind="args">Hello, I'm a card</MainCard></div>`
  })
};
