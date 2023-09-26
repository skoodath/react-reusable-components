import type { Meta, StoryObj } from "@storybook/react";
import MultiStepForm from "./MultiStepForm";

const meta = {
  title: "Molecules/Multi Step Form",
  component: MultiStepForm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof MultiStepForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
