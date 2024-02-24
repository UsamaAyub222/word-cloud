const cloudModel = require("../models/cloudModel");

// insert callback
const insertSentence = async (parent, args, context) => {
  try {
    const data = await cloudModel.insertMany(args.data);
    return data;
  } catch (error) {
    return "Error";
  }
};

const SentenceDelController = async (parent, args, context) => {
  try {
    const data = await cloudModel.deleteMany();
    return [];
  } catch (error) {
    return ["error"];
  }
};

const getAllSentence = async (parent, args, context) => {
  try {
    const sentences = await cloudModel.find();
    return sentences;
  } catch (error) {
    return [];
  }
};

module.exports = { insertSentence, getAllSentence, SentenceDelController };
