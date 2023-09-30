import type { Meta, StoryObj } from "@storybook/react";
import TabNav from "./TabNav";

type TabNavStory = StoryObj<typeof TabNav>;

const meta = {
  title: "Molecules/Tab Navigation",
  component: TabNav,
  parameters: {
    tag: ["autodocs"],
  },
  args: {
    navItems: [
      "home",
      "about",
      "services",
      "products",
      "docs",
      "contact",
      "donate",
    ],
    buttonSize: "medium",
    buttonVariant: "contained",
    buttonRadius: "square",
  },
} satisfies Meta<typeof TabNav>;

export default meta;

export const Default: TabNavStory = {};
