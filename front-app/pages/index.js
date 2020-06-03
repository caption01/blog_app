import React, { useEffect, useState } from "react";
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

const QUERY_POST_BY_SEARCH = gql`
  query posts($query: String) {
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

const getPostCards = ({ data }) => {
  const postCardLists = data?.posts || [];

  return postCardLists.map((post) => (
    <Col xs={24} md={12} xl={8} key={post.id}>
      <CardItem key={post.id} post={post} />
    </Col>
  ));
};

const MainPage = () => {
  const [search, setSearch] = useState("");

  const { data, loading, error } = useQuery(QUERY_POST_BY_SEARCH, {
    variables: { query: search },
  });

  if (loading) {
    return <Spin />;
  }

  if (error) {
    return <Empty />;
  }

  return (
    <>
      <SearchBar onSearch={setSearch} />
      <DisplayCardContent>{getPostCards({ data })}</DisplayCardContent>
    </>
  );
};

export default MainPage;
