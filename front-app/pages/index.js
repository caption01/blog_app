import React from "react";
import styled from "styled-components";
import { Row, Col, Spin, Empty } from "antd";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import SearchBar from "../component/searchBar/searchBar";
import CardItem from "../component/card/card";

const DisplayCardContent = styled(Row)`
  width: 80%;
  height: 80%;
  overflow-y: scroll;
`;

const QUERY_POSTS = gql`
  {
    posts {
      id
      title
      description
      image
      links
      tags
    }
  }
`;

const getPostCards = () => {
  const { data, loading, error } = useQuery(QUERY_POSTS);

  if (loading) {
    return <Spin />;
  }

  if (error) {
    return <Empty />;
  }

  const postCardLists = data?.posts || [];

  return postCardLists.map((post) => (
    <Col xs={24} md={12} xl={8} key={post.id}>
      <CardItem key={post.id} post={post} />
    </Col>
  ));
};

const MainPage = () => {
  return (
    <>
      <SearchBar />
      <DisplayCardContent>{getPostCards()}</DisplayCardContent>
    </>
  );
};

export default MainPage;
