const { gql } = require("apollo-server");
const typeDefs = gql`
  type Query {
    getAllSentence: [Sentence]
  }
  type Sentence {
    sentence: String
  }

  input UserInput {
    sentence: String!
  }
  type Mutation {
    insertSentence(data: [UserInput!]!): [Sentence]
    SentenceDelController: [Sentence]
  }
`;

module.exports = typeDefs;
