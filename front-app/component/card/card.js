import React from "react";
import styled from "styled-components";
import { Card, Divider } from "antd";

import ImageFrame from "./imageFrame";
import TabIcons from "./iconTab";

const StyledCardItem = styled(Card)`
  margin: 12px 12px 0px 12px;
  max-width: 400px;
`;

const StyledDivider = styled(Divider)``;

const CardItem = ({ post }) => {
  return (
    <div>
      <StyledCardItem title={post.title} bordered={false} hoverable>
        <ImageFrame image={post.image} description={post.description} />
        <StyledDivider />
        <TabIcons />
      </StyledCardItem>
    </div>
  );
};

export default CardItem;
