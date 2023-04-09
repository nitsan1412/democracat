import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  direction: "rtl",
  shape: {
    borderRadius: 10,
  },
  overrides: {
    MuiButtonBase: {
      root: {
        boxShadow: 'unset',
      }
    }
  },
  palette: {
    black: { main: "#303030", contrastText: "#ffffff" },
    primary: { main: "#79C300" },
    secondary: { main: "#FC68B4" }
  },
  typography: {
    h1: { direction: "rtl", fontFamily: "Assistant" },
    h2: { direction: "rtl", fontFamily: "Assistant" },
    h3: { direction: "rtl", fontFamily: "Assistant" },
    h4: { direction: "rtl", fontFamily: "Assistant" },
    h5: { direction: "rtl", fontFamily: "Assistant" },
    h6: { direction: "rtl", fontFamily: "Assistant" },
    body1: { direction: "rtl", fontFamily: "Assistant" },
    body2: { direction: "rtl", fontFamily: "Assistant" },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 350,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default function Provider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
