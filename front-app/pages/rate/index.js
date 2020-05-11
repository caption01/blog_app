import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const HELLO = gql`
  {
    hello
  }
`;

const ME = gql`
  {
    me
  }
`;

const getHelloWord = () => {
  const { loading, error, data } = useQuery(HELLO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error...</p>;

  return <h1>{data.hello}</h1>;
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
      {/* {ExchangeRate()} */}
      {getHelloWord()}
      {getMe()}
    </div>
  );
};

export default RateContent;
