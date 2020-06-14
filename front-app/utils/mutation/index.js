import gql from "graphql-tag";

export const UPDATE_SEARCH = gql`
  mutation updateSearch($search: String!) {
    updateSearch(search: $search) @client
  }
`;

export const PostMutation = {
  updateSearch: (_, variables, { cache }) => {
    const nextSearch = variables.search;

    cache.writeData({
      data: { search: nextSearch },
    });

    return nextSearch;
  },
};
