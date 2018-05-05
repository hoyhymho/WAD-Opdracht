const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/hoyhym-wad");

const PostSchema = mongoose.Schema({
  title: String,
  content: String,
  image: String
});

const Post = mongoose.model("post", PostSchema);

module.exports = { Post };
