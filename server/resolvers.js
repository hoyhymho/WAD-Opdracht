const { Post, User } = require("./connectors");
const { GraphQLScalarType, GraphQLError } = require("graphql");
const { Kind } = require("graphql/language");
const jwt = require("jsonwebtoken");
const { jwtsecret } = require("./config/");

function getAuthenticatedUser(context) {
  return context.user.then(user => {
    if (!user) {
      return Promise.reject("Unauthorized");
    }
    return user;
  });
}

module.exports = {
  Query: {
    allPosts() {
      return Post.find();
    },
    allUsers() {
      return User.find();
    },
  },
  Mutation: {
    addPost(_, args) {
      return getAuthenticatedUser(context).then(user =>{
        args.user = user.id;
        return new Post(args).save();
      })
    },
    deletePost(_, args) {
      const { _id } = args;
      return Post.findByIdAndRemove({ _id });
    },
    login(_, { email, password }, context) {
      console.log("login");
      return User.findOne({ email }).then(user => {
        if (!user || !user.validPassword(password)) {
          return Promise.reject("Invalid username/password");
        } else {
          console.log("login ok");
          const token = jwt.sign(
            {
              id: user._id,
              name: user.name
            },
            jwtsecret
          );
          user.jwt = token;
          context.user = Promise.resolve(user);
          return user;
        }
      });
    },
    register(_, { email, password, name }, context) {
      console.log("register", email, password, name);
      return User.findOne({ email }).then(user => {
        if (!user) {
          return User.create({ email, password, name })
            .then(user => {
              context.user = Promise.resolve(user);
              return user;
            })
            .catch(err => {
              return Promise.reject("Registration errors" + err.message);
            });
        }
        return Promise.reject("Already exists");
      });
    }
  },
  Post: {
    user: post => {
      return User.findById(post.user);
    }
  },
  User: {
    posts: user => {
      return Post.find({ user: user._id });
    },
  },

};
