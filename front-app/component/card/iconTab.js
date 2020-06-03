import React from "react";
import styled from "styled-components";
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
        <MediumOutlined
          style={{ paddingRight: "10px", color: isMedium ? "black" : "grey" }}
        />

        <FacebookOutlined
          style={{
            paddingRight: "10px",
            color: isFacebook ? "#3b5998" : "grey",
          }}
        />
      </IconTabs>
    </>
  );
};

export default TabIcons;
