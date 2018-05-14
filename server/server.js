const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");
const cors = require("cors");
const { User } = require("./connectors");
const jwt = require("express-jwt");
const { jwtsecret } = require("./config/");
const app = express();

const PORT = 4000;

const typeDefs = require("./schema.gql");
const resolvers = require("./resolvers.js");
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

app.use(cors());
app.use(
  "/graphql",
  bodyParser.json(),
  jwt({ secret: jwtsecret, credentialsRequired: false }),
  graphqlExpress(req => ({
    schema,
    context: {
      user: req.user ? User.findById(req.user.id) : Promise.resolve(null)
    }
  }))
);
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

app.listen(PORT, () => {
  console.log(`Go to http://localhost:${PORT}/graphiql to run queries!`);
});
