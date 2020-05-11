import { GraphQLServer } from "graphql-yoga";

import resolvers from "./src/resolver/index";

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context() {},
});

server.start(() => {
  console.log("The Server is up");
});
