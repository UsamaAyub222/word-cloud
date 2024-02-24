const mongoose = require("mongoose");

//schema design
const cloudSchema = new mongoose.Schema(
  {
    sentence: {
      type: String,
      required: [true, "name is required"],
    }
  },
  { timestamps: true }
);

//export
const cloudModel = mongoose.model("clouds", cloudSchema);
module.exports = cloudModel;