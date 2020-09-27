import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  font-size: 62.5%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.colors.backgroundMain}
}

h1,h2,h3,h4,h5,h6,p{
  margin: 0
}
`;
