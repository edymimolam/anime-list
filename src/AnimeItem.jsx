import React from "react";
import styled, { css } from "styled-components";

const StyledContainer = styled.div`
  display: flex;
`;

const StyledImage = styled.img`
  ${({ isAdult }) =>
    isAdult &&
    css`
      filter: blur(10px);
      display: flex;
      justify-content: center;
      align-items: center;
      &::after {
        content: "adult content";
        padding: 0.5rem;
        text-transform: uppercase;
        color: #fff;
        background-color: rgba(125, 125, 125, 0.7);
      }
    `}
`;

export default function AnimeItem({
  anime: { title, coverImage, isAdult, ...anime },
}) {
  console.log(anime);
  return (
    <StyledContainer>
      <h1>{title.romaji}</h1>
      {isAdult && <h3>Adult</h3>}
      <StyledImage
        src={coverImage.extraLarge}
        alt={title.romaji}
        isAdult={isAdult}
      />
    </StyledContainer>
  );
}
