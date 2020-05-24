import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const FIRST_POST = gql`
  {
    posts {
      title
      descirption
    }
  }
`;

const getFirstPosts = () => {
  const { loading, error, data } = useQuery(FIRST_POST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error...</p>;

  return <h1>{data.posts[0].title}</h1>;
};

const getMe = () => {
  const { loading, error, data } = useQuery(ME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error...</p>;

  return <h1>{data.me}</h1>;
};

const RateContent = () => {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      {getFirstPosts()}
    </div>
  );
};

export default RateContent;
