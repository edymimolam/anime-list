import React from "react";
import { useHistory } from "react-router-dom";
import { truncateStr } from "../helpers";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  width: 32rem;
  margin-bottom: 5rem;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bright};
  cursor: pointer;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    width: 100%;
    flex-direction: row;
  }
`;
const StyledImage = styled.div`
  min-height: 32rem;
  min-width: 32rem;
  background-image: url(${({ src }) => src});
  background-size: cover;
`;
const StyledInnerContainer = styled.div`
  padding: 2rem;
`;
const StyledTitle = styled.h2`
  margin-bottom: 2rem;
`;

export default function AnimeItem({
  anime: { title, coverImage, description },
}) {
  let history = useHistory();
  function goToSinglePage() {
    history.push("/single");
  }

  function createDescriptionHtml() {
    return { __html: description && truncateStr(description, 500) };
  }

  return (
    <StyledContainer onClick={goToSinglePage}>
      <StyledImage src={coverImage.extraLarge} alt={title.romaji} />
      <StyledInnerContainer>
        <StyledTitle>{title.romaji}</StyledTitle>
        <p dangerouslySetInnerHTML={createDescriptionHtml()}></p>
      </StyledInnerContainer>
    </StyledContainer>
  );
}
