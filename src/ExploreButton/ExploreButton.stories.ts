import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import ExploreButton from "./ExploreButton";
import "../index.css";
import { background } from "storybook/internal/theming";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "ExploreButton",
  component: ExploreButton,
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
  args: { onClick: fn() },
} satisfies Meta<typeof ExploreButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
