import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Col, Spin, Empty } from "antd";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import CardItem from "../component/card/card";
import { GET_SEARCH } from "../utils/query/index";

const DisplayCardContent = styled(Row)`
  margin-top: 50px;
  margin-bottom: 50px;
  width: 80%;
`;

const QUERY_POST_BY_SEARCH = gql`
  query queryPosts($query: String) {
    posts(query: $query) {
      id
      title
      description
      image
      links
      tags
    }
  }
`;

const getPostCards = (posts) => {
  const postCardLists = posts || [];

  return postCardLists.map((post) => (
    <Col xs={24} md={12} xl={8} key={post.id}>
      <CardItem key={post.id} post={post} />
    </Col>
  ));
};

const MainPage = () => {
  // const [search, setSearch] = useState("");
  const {
    data: { search },
  } = useQuery(GET_SEARCH);

  const { data, loading, error } = useQuery(QUERY_POST_BY_SEARCH, {
    variables: { query: search },
  });

  if (!data) {
    return null;
  }

  if (loading) {
    return <Spin />;
  }

  if (error) {
    return <Empty />;
  }

  const postsList = data?.posts;

  return (
    <>{<DisplayCardContent>{getPostCards(postsList)}</DisplayCardContent>}</>
  );
};

export default MainPage;
