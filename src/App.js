import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Style from "./style";
import ItemContainer from "./AnimeContainer";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 5rem;
  border-bottom: solid 1px ${({ theme }) => theme.colors.backgroundBright};
`;

const client = new ApolloClient({
  uri: "https://graphql.anilist.co",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Style>
        <div className="App">
          <StyledHeader>
            <h1>Oh hi Mark</h1>
          </StyledHeader>
          <ItemContainer />
        </div>
      </Style>
    </ApolloProvider>
  );
}

export default App;
