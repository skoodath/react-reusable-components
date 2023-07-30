import { ThemeProvider, CssBaseline } from "@mui/material";
import React, { FunctionComponent } from "react";
import { StoryProps } from "@storybook/addon-docs";
import myTheme from "./theme";

const withMuiTheme = (
  Story: FunctionComponent<StoryProps>,
  context: React.JSX.IntrinsicAttributes & StoryProps
) => (
  <ThemeProvider theme={myTheme}>
    <CssBaseline />
    <Story {...context} />
  </ThemeProvider>
);

export default withMuiTheme;
