import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import withApollo from "next-with-apollo";
import { createHttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";

import { PostMutation } from "./mutation/index";

const API_GRAPHQL = process.env.NEXT_PUBLIC_API_GRAPHQL;

const link = createHttpLink({
  fetch,
  uri: API_GRAPHQL,
});

const cache = new InMemoryCache();

const resolvers = {
  Mutation: {
    ...PostMutation,
  },
};

const initialData = {
  search: "",
};

cache.writeData({ data: initialData });

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      link,
      cache: cache,
      resolvers: resolvers,
    })
);
