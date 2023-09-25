import { ThemeProvider, CssBaseline, ThemeOptions } from "@mui/material";
import React, { FunctionComponent } from "react";
import { StoryProps } from "@storybook/addon-docs";
import myTheme from "./theme";

const withMuiTheme =
  // eslint-disable-next-line react/display-name
  (Story: FunctionComponent<StoryProps>) => (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );

export default withMuiTheme;
