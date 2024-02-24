const {
  insertSentence,
  getAllSentence,
  SentenceDelController,
} = require("../controllers/cloudController");
const resolvers = {
  Query: {
    getAllSentence,
  },
  Mutation: {
    insertSentence,
    SentenceDelController
  },
};

module.exports = resolvers;
