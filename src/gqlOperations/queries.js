import { gql } from "@apollo/client";

export const GET_ALL_SENTECES = gql`
  query GetSentences {
    getAllSentence {
      sentence
    }
  }
`;
