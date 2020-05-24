import { GraphQLServer } from "graphql-yoga";

import resolvers from "./resolver/index";
import prisma from "./prisma";

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context(req) {
    return {
      req,
      prisma,
    };
  },
});

server.start(() => {
  console.log("The Server is up");
});
