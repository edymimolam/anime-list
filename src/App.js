import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import ItemContainer from "./AnimeContainer";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
`;

const client = new ApolloClient({
  uri: "https://graphql.anilist.co",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <StyledHeader>
          <h1>Oh hi Mark</h1>
        </StyledHeader>
        <ItemContainer />
      </div>
    </ApolloProvider>
  );
}

export default App;
