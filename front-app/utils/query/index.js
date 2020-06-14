import gql from "graphql-tag";

export const GET_SEARCH = gql`
  query GetSearchValue {
    search @client
  }
`;
