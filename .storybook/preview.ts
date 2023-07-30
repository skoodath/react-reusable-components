import type { Preview } from "@storybook/react";
import myTheme from "../theme";
import { ThemeProvider, CssBaseline } from "@mui/material";

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "#eeeeee",
      values: [
        {
          name: "light",
          value: "#eeeeee",
        },
        {
          name: "dark",
          value: "#222222",
        },
      ],
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
];
