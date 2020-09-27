import React from "react";
import { getRandomInt } from "../helpers";
import { useQuery } from "@apollo/client";
import { GET_ANIMES } from "../graphql/get-anime";
import styled from "styled-components";
import AnimeItem from "../components/AnimeItem";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 110rem;
  margin: 0 auto;
  padding: 0 5rem;
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
