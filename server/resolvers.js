const { Post, User, Comment } = require("./connectors");
const { GraphQLScalarType, GraphQLError } = require("graphql");
const { Kind } = require("graphql/language");
const jwt = require("jsonwebtoken");
const { jwtsecret } = require("./config/");

const validateValue = value => {
  if (isNaN(Date.parse(value)))
    throw new GraphQLError(`Query error: not a valid date`, [value]);
};

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
    post(_, args) {
      return Post.findById(args._id);
    }
  },
  Mutation: {
    addPost(_, args, context) {
      return getAuthenticatedUser(context).then(user => {
        args.user = user.id;
        return new Post(args).save();
      });
    },
    addComment(_, args, context) {
      return getAuthenticatedUser(context).then(user => {
        args.user = user.id;
        return new Comment(args).save();
      });
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
    },
    comments: post => {
      return Comment.find({ post: post._id })
    }
  },
  Comment: {
    post: comment => {
      return Post.findById(comment.post);
    },
    user: comment => {
      return User.findById(comment.user);
    }
  },
  User: {
    posts: user => {
      return Post.find({ user: user._id });
    },
    comments: user => {
      return Comment.find({ user: user._id });
    }
  },
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date type",
    parseValue(value) {
      // value comes from the client, in variables
      validateValue(value);
      return new Date(value); // sent to resolvers
    },
    parseLiteral(ast) {
      // value comes from the client, inlined in the query
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(
          `Query error: Can only parse dates strings, got a: ${ast.kind}`,
          [ast]
        );
      }
      validateValue(ast.value);
      return new Date(ast.value); // sent to resolvers
    },
    serialize(value) {
      // value comes from resolvers
      return value.toISOString(); // sent to the client
    }
  })

};
