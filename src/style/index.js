import React from "react";
import GlobalStyles from "./ GlobalStyles";
import Theme from "./Theme";

export default function Style({ children }) {
  return (
    <Theme>
      <GlobalStyles />
      {children}
    </Theme>
  );
}
