import React from "react";
import styled from "styled-components";
import { Layout, Button } from "antd";

import { SearchOutlined } from "@ant-design/icons";

const { Footer } = Layout;

const StyledFooter = styled(Footer)`
  background-color: ${(props) => props.theme.colors.bg_primary};
  color: ${(props) => props.theme.colors.text_primary};
  text-align: center;
  height: 5vh;
`;

const FooterBar = () => {
  return (
    <StyledFooter>
      <div>
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      </div>
    </StyledFooter>
  );
};

export default FooterBar;
