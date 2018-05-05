const { Post } = require("./connectors");

module.exports = {
  Query: {
    allPosts() {
      return Post.find();
    }
  },
  Mutation: {
    addPost(_, args) {
      return new Post(args).save();
    },
    deletePost(_, args) {
      const { _id } = args;
      return Post.findByIdAndRemove({ _id });
    },
  },

};
