import React from "react";
import { Switch, Route } from "react-router-dom";
import AnimeContainer from "../containers/AnimeContainer";
import SingleAnime from "./SingleAnime";
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
      <Switch>
        <Route path="/single">
          <SingleAnime />
        </Route>
        <Route path="/">
          <AnimeContainer />
        </Route>
      </Switch>
    </>
  );
}
