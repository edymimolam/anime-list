import { gql } from "@apollo/client";

export const GET_ANIMES = gql`
  query GetAnimes($page: Int!) {
    Page(page: $page) {
      media(isAdult: false) {
        id
        title {
          romaji
        }
        description
        coverImage {
          extraLarge
        }
      }
    }
  }
`;
