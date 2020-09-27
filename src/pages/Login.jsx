import React from "react";
import Button from "../components/Button";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Login({ login }) {
  return (
    <StyledContainer>
      <Button callback={login}>login</Button>
    </StyledContainer>
  );
}
