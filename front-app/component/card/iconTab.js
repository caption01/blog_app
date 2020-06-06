import React from "react";
import styled from "styled-components";
import { Tooltip, Tag } from "antd";
import { FacebookOutlined, MediumOutlined } from "@ant-design/icons";

const IconTabs = styled.div`
  font-size: 22px;
  text-align: end;
`;

const TabIcons = ({ links }) => {
  const isMedium = links.find((url) => url.includes("medium.com"));
  const isFacebook = links.find((url) => url.includes("facebook.com"));

  return (
    <>
      <IconTabs>
        <Tooltip
          title={isMedium ? "read on Medium" : "coming soon"}
          key={isMedium}
        >
          <Tag icon={<MediumOutlined />} color={isMedium ? "black" : "grey"}>
            <a target="_blank" href={isMedium}>
              Medium
            </a>
          </Tag>
        </Tooltip>

        <Tooltip
          title={isFacebook ? "read on Facebook" : "coming soon"}
          key={isFacebook}
        >
          <Tag
            icon={<FacebookOutlined />}
            color={isFacebook ? "#3b5998" : "grey"}
          >
            <a target="_blank" href={isFacebook}>
              Facebook
            </a>
          </Tag>
        </Tooltip>
      </IconTabs>
    </>
  );
};

export default TabIcons;
