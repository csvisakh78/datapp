const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    _id:mongoose.Schema.Types.ObjectId,
    key: String,
    createdAt: Date,
    counts: Array
  },
  {
    collection: "records",
  }
);

module.exports = mongoose.model("Records", schema);
