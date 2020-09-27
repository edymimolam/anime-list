import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    backgroundMain: "#13181c",
    backgroundBright: "#fff",
    primary: "#D91667",
  },
  mediaQueries: {
    tablet: "only screen and (min-width: 768px)",
  },
};

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
