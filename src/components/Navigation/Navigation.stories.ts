import type { Meta, StoryObj } from "@storybook/react";
import Navigation from "./Navigation";
import "@/index.css";

const meta = {
  title: "Navigation",
  component: Navigation,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [
        { name: "light", value: "white" },
        { name: "dark", value: "#020617" },
      ],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
