import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.bright};
  background-color: ${({ theme }) => theme.colors.accent};
  font-size: 2.5rem;
  border: none;
  padding: 1.5rem 2.5rem;
  border-radius: 1.5rem;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    opacity: 0.9;
  }
`;

export default function Button({ callback, children }) {
  return <StyledButton onClick={callback}>{children}</StyledButton>;
}
