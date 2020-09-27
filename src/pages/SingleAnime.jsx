import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.bright};
`;

export default function SingleAnime() {
  return (
    <StyledContainer>
      <h1>Okay Google</h1>
    </StyledContainer>
  );
}
