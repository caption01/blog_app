import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import withApollo from "next-with-apollo";
import { createHttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";

// const GRAPHQL_URL = "http://localhost:4010";

const API_GRAPHQL = process.env.NEXT_PUBLIC_API_GRAPHQL;

const link = createHttpLink({
  fetch,
  uri: API_GRAPHQL,
});

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      link,
      cache: new InMemoryCache().restore(initialState || {}),
    })
);
