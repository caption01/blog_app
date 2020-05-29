import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

import SearchBar from "../component/searchBar/searchBar";
import CardItem from "../component/card/card";

const DisplayCardContent = styled(Row)`
  margin: 24px 24px;
  width: 80%;
  height: 80%;
  overflow-y: scroll;
`;

const cardItem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const MainPage = () => {
  return (
    <>
      <SearchBar />
      <DisplayCardContent>
        {cardItem.map((val) => (
          <Col xs={24} md={12} xl={8} key={val}>
            <CardItem key={val} />
          </Col>
        ))}
      </DisplayCardContent>
    </>
  );
};

export default MainPage;
