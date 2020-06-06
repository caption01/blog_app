import React, { useState } from "react";
import { Card, Row, Col, Spin } from "antd";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import FormEdit from "../../component/form/form";
import SearchBar from "../../component/searchBar/searchBar";

const StyledRow = styled(Row)`
  display: flex;
  align-items: center;
  padding: 50px;
  width: 100%;
`;

const StyledExtra = styled(SearchBar)`
  width: 100%;
`;

const QUERY_CARD_BY_ID = gql`
  query post($id: String!) {
    post(id: $id) {
      id
      title
      description
      image
      links
      tags
    }
  }
`;

const EditPage = () => {
  const [postId, setPostId] = useState("");

  const { data, loading, error } = useQuery(QUERY_CARD_BY_ID, {
    variables: { id: postId },
  });

  const onSearch = (postId) => {
    setPostId(postId);
  };

  if (loading) {
    return <Spin />;
  }

  if (error) {
    console.log(error.message);
    return;
  }

  return (
    <>
      <StyledRow>
        <Col xs={24} md={24}>
          <Card
            title="Add content"
            bordered={false}
            hoverable
            extra={<StyledExtra onSearch={onSearch} />}
          >
            <FormEdit post={data.post} />
          </Card>
        </Col>
      </StyledRow>
    </>
  );
};

export default EditPage;
