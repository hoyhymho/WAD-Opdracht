const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/hoyhym-wad");

const PostSchema = mongoose.Schema({
  title: String,
  content: String,
  image: String
});

const UserSchema = mongoose.Schema({
  name: String,
  email: { type: String, required: true, index: { unique: true } },
  passwordHash: { type: String, required: true }
});

const CommentSchema = mongoose.Schema(
  {
    message: String,
    post: String,
    user: String
  },
  {
    timestamps: true
  }
);

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

UserSchema.virtual("password").set(function(value) {
  this.passwordHash = bcrypt.hashSync(value, 12);
});

const Post = mongoose.model("post", PostSchema);
const User = mongoose.model("user", UserSchema);
const Comment = mongoose.model("commen t", CommentSchema);

module.exports = { Post, User, Comment };
