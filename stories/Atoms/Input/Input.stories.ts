import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@mui/material";
import TextField from "./Input";

const meta = {
  title: "Atoms/Input",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "Input",
    required: true,
  },
  argTypes: {
    variant: { control: "radio" },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "filled",
  },
};
export const Outlined: Story = {
  args: {
    variant: "outlined",
  },
};
export const Standard: Story = {
  args: {
    variant: "standard",
  },
};

export const Password: Story = {
  args: {
    variant: "standard",
    type: "password",
  },
};
