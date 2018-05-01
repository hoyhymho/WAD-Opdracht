const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
  {
    title: String,
    date: String,
    author: String,
    image: String,
    comments: Array,
    upvotes: Number,
    downvotes: Number,
    content: String,
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Post", PostSchema);
