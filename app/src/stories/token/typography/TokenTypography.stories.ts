import { Story } from "@storybook/vue3";
import TokenTypography from "./TokenTypography.vue";

const argTypes = {
  message: {
    name: "Label",
    control: {
      type: "text"
    }
  },
  type: {
    table: { disable: true }
  }
};

const Template: Story = (args) => ({
  components: { TokenTypography },
  setup() {
    return { args };
  },
  template: '<TokenTypography v-bind="args" />'
});

export const Header1 = Template.bind({});
Header1.args = {
  message: "Header 1",
  type: "header-1"
};

export const Header2 = Template.bind({});
Header2.args = {
  message: "Header 2",
  type: "header-2"
};

export const Header3 = Template.bind({});
Header3.args = {
  message: "Header 3",
  type: "header-3"
};

export const Header4 = Template.bind({});
Header4.args = {
  message: "Header 4",
  type: "header-4"
};

export const BodyText = Template.bind({});
BodyText.args = {
  message: "Body text",
  type: "body"
};

export const BodyBoldText = Template.bind({});
BodyBoldText.args = {
  message: "Body bold text",
  type: "body-bold"
};

export const SmallText = Template.bind({});
SmallText.args = {
  message: "Small text",
  type: "small"
};

export const SmallBoldText = Template.bind({});
SmallBoldText.args = {
  message: "Small bold text",
  type: "small-bold"
};

export const Strikethrough = Template.bind({});
Strikethrough.args = {
  message: "Strikethrough",
  type: "strikethrough"
};

export const Underline = Template.bind({});
Underline.args = {
  message: "Underline",
  type: "underline"
};

export const Link = Template.bind({});
Link.args = {
  message: "Link",
  type: "link"
};

export const Highlight = Template.bind({});
Highlight.args = {
  message: "Highlight",
  type: "highlight"
};

export const Blockquote = Template.bind({});
Blockquote.args = {
  message: "Blockquote",
  type: "blockquote"
};

export default {
  title: "Design System/Token/Typography",
  argTypes,
  component: TokenTypography
};
