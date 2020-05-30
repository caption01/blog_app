import React from "react";
import styled from "styled-components";
import {
  FacebookOutlined,
  MediumOutlined,
  CopyOutlined,
} from "@ant-design/icons";

const IconTabs = styled.div`
  font-size: 22px;
  text-align: end;
`;

const TabIcons = () => {
  return (
    <>
      <IconTabs>
        <MediumOutlined style={{ paddingRight: "10px" }} />
        <FacebookOutlined style={{ paddingRight: "10px" }} />
        <CopyOutlined style={{ paddingRight: "10px" }} />
      </IconTabs>
    </>
  );
};

export default TabIcons;
