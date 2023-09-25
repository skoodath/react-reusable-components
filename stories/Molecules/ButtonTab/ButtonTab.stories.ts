import type { Meta, StoryObj } from "@storybook/react";
import ButtonTab, { Buttons } from "./ButtonTab";

const buttonList: Buttons[] = [
  {
    caption: "Tab 1",
    isActive: true,
  },
  {
    caption: "Tab 2",
    isActive: false,
  },
];

const meta = {
  title: "Molecules/ButtonTab",
  component: ButtonTab,
  tags: ["autodocs"],
  args: {
    size: "large",
    alignment: "left",
    direction: "horizontal",
  },
} satisfies Meta<typeof ButtonTab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttons: buttonList,
  },
};

export const Medium: Story = {
  args: {
    ...Default.args,
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "small",
  },
};
