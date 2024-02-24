import { gql } from "@apollo/client";

export const INSERT_SENTENCE = gql`
  mutation add($data: [UserInput!]!) {
    insertSentence(data: $data) {
      sentence
    }
  }
`;

export const DELETE_ALL_SENTENCE = gql`
  mutation {
    SentenceDelController {
      sentence
    }
  }
`;
