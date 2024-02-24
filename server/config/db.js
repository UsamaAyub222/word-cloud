const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    console.log(process.env.MONGO_URL);
    const mongo = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected with mongodb `);
  } catch (error) {
    console.log(`Could not connect with ${error}`);
  }
};

module.exports = connectDb;