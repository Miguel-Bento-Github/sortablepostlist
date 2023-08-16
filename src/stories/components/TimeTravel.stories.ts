import type { Meta, StoryObj } from "@storybook/vue3";
import TimeTravelComponent from "./TimeTravel.vue";

const meta: Meta<typeof TimeTravelComponent> = {
  title: "Component/Time Travel",
  component: TimeTravelComponent
};

export default meta;
type Story = StoryObj<typeof TimeTravelComponent>;

export const TimeTravel: Story = {
  render: (args) => ({
    components: { TimeTravel: TimeTravelComponent },
    setup() {
      return { args };
    },
    template: `<TimeTravel v-bind="args" />`
  }),
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" }
  }
};
