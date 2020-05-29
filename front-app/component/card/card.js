import React from "react";
import styled from "styled-components";
import { Card } from "antd";

import TabIcons from "./iconTab";

const StyledCardItem = styled(Card)`
  margin: 12px 12px 0px 12px;
`;

const CardItem = () => {
  return (
    <>
      <StyledCardItem title="Card title" bordered={false} hoverable>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <TabIcons />
      </StyledCardItem>
    </>
  );
};

export default CardItem;
