import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import React from "react";
export default function Provider({ children }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme:dark)");
  const theme = React.useMemo(
    () =>
      createTheme({
        direction: "rtl",
        shape: {
          borderRadius: 10,
        },
        overrides: {
          MuiButtonBase: {
            root: {
              boxShadow: "unset",
            },
          },
        },
        typography: {
          h1: { direction: "rtl", fontFamily: "Assistant" },
          h2: { direction: "rtl", fontFamily: "Assistant" },
          h3: { direction: "rtl", fontFamily: "Assistant" },
          h4: { direction: "rtl", fontFamily: "Assistant" },
          h5: { direction: "rtl", fontFamily: "Assistant" },
          h6: { direction: "rtl", fontFamily: "Assistant" },
          subtitle1: { direction: "rtl", fontFamily: "Assistant" },
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
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          ...(prefersDarkMode
            ? {
                // palette values for light mode
                black: { main: "#303030", contrastText: "#ffffff" },
                primary: { main: "#79C300" },
                secondary: { main: "#FC68B4" },
              }
            : {
                // palette values for dark mode
                black: { main: "#303030", contrastText: "#ffffff" },
                primary: { main: "#79C300" },
                secondary: { main: "#FC68B4" },
              }),
        },
      } as any),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
