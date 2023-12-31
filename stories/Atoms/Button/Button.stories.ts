import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    type: "button",
    children: "Button",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "contained",
  },
};

export const Secondary: Story = {
  args: {
    variant: "outlined",
  },
};
export const Text: Story = {
  args: {
    ...Primary.args,
    variant: "text",
  },
};

export const Large: Story = {
  args: {
    ...Primary.args,
    size: "large",
  },
};

export const Medium: Story = {
  args: {
    ...Primary.args,
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    ...Primary.args,
    size: "small",
  },
};
