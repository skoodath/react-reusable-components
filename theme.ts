import { createTheme } from "@mui/material/styles";

let myTheme = createTheme({
  palette: {
    primary: {
      main: "#FF1868",
      light: "#FF4080",
      dark: "#ED1466",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#00f495",
      light: "#81F7B7",
      dark: "#00C14C",
      contrastText: "#212422",
    },
  },
});

export default myTheme;
