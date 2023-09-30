import type { Preview } from "@storybook/react";
import myTheme from "../theme";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { ThemeProvider, CssBaseline } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/material-icons";

/* TODO: update import for your custom Material UI themes */
// import { lightTheme, darkTheme } from '../path/to/themes';

// Import your fontface CSS files here
// Don't have any? We recommend installing and using @fontsource/roboto

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
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
  withThemeFromJSXProvider({
    themes: {
      light: myTheme,
    },
    defaultTheme: "dark",
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];
