import React from "react";
import { getRandomInt } from "./helpers";
import { useQuery } from "@apollo/client";
import { GET_ANIMES } from "./graphql/get-anime";
import styled from "styled-components";
import AnimeItem from "./AnimeItem";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const page = getRandomInt(1000);

export default function ItemContainer() {
  const { loading, error, data } = useQuery(GET_ANIMES, {
    variables: { page },
  });
  console.log("ItemContainer -> loading, error, data ", loading, error, data);
  return (
    <StyledContainer>
      {data &&
        data.Page.media.map(anime => (
          <AnimeItem anime={anime} key={anime.id} />
        ))}
    </StyledContainer>
  );
}
