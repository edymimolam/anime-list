import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    dark: "#13181c",
    bright: "#fff",
    accent: "#D91667",
  },
  mediaQueries: {
    tablet: "only screen and (min-width: 768px)",
  },
};

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
