import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: { main: "#333333" },
  },
  typography: {
    h1: { direction: "rtl" },
    h2: { direction: "rtl" },
    h3: { direction: "rtl" },
    h4: { direction: "rtl" },
    h5: { direction: "rtl" },
    h6: { direction: "rtl" },
    body1: { direction: "rtl" },
    body2: { direction: "rtl" },
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
