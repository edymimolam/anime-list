import React from "react";
import AnimeContainer from "../containers/AnimeContainer";
import Button from "../components/Button";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 2rem 5rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 5rem;
  border-bottom: solid 1px ${({ theme }) => theme.colors.bright};
`;

export default function Main({ logout }) {
  return (
    <>
      <StyledHeader>
        <Button callback={logout}>logout</Button>
      </StyledHeader>
      <AnimeContainer />
    </>
  );
}
