import { createTheme } from "@mui/material/styles";

let myTheme = createTheme({
  palette: {
    primary: {
      main: "#0052cc",
      light: "#0052cc",
      dark: "#0052cc",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#edf2ff",
      light: "#edf2ff",
      dark: "#edf2ff",
      contrastText: "#121314",
    },
  },
});

export default myTheme;
