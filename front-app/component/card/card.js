import React from "react";
import styled from "styled-components";
import { Card, Divider, Tooltip } from "antd";

import ImageFrame from "./imageFrame";
import TabIcons from "./iconTab";

const StyledCardItem = styled(Card)`
  margin: 12px 12px 0px 12px;
  max-width: 400px;
`;

const StyledDivider = styled(Divider)``;

const textTooltip = (title) => {
  return (
    <Tooltip placement="topLeft" title={title}>
      {title}
    </Tooltip>
  );
};

const CardItem = ({ post }) => {
  return (
    <div>
      <StyledCardItem
        title={textTooltip(post.title)}
        bordered={false}
        hoverable
      >
        <ImageFrame image={post.image} description={post.description} />
        <StyledDivider />
        <TabIcons links={post.links} />
      </StyledCardItem>
    </div>
  );
};

export default CardItem;
