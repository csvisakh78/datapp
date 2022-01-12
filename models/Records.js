const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    title: String,
    content: String,
  },
  {
    collection: "records",
  }
);

module.exports = mongoose.model("Records", schema);
