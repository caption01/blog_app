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

const cardItems = [
  {
    id: 1,
    link: "https://www.imagemagick.org/Usage/canvas/gradient_bilinear.jpg",
  },
  {
    id: 2,
    link:
      "https://1.bp.blogspot.com/-J672hhVil2c/VcRmz4BdOPI/AAAAAAAAMw4/w51C3ULbdRU/s200-c/blogger-re-size-crop-photo.jpg",
  },
  {
    id: 3,
    link:
      "https://marketsquaregeelong.com.au/wp-content/uploads/2018/08/My-Size-400x400.jpg",
  },
  {
    id: 4,
    link: "https://www.imagemagick.org/Usage/canvas/gradient_bilinear.jpg",
  },
  {
    id: 5,
    link:
      "https://1.bp.blogspot.com/-J672hhVil2c/VcRmz4BdOPI/AAAAAAAAMw4/w51C3ULbdRU/s200-c/blogger-re-size-crop-photo.jpg",
  },
  {
    id: 6,
    link:
      "https://marketsquaregeelong.com.au/wp-content/uploads/2018/08/My-Size-400x400.jpg",
  },
];

const MainPage = () => {
  return (
    <>
      <SearchBar />
      <DisplayCardContent>
        {cardItems.map((item) => (
          <Col xs={24} md={12} xl={8} key={item.id}>
            <CardItem key={item.id} link={item.link} />
          </Col>
        ))}
      </DisplayCardContent>
    </>
  );
};

export default MainPage;
