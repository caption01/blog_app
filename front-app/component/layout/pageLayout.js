import React from "react";
import styled from "styled-components";
import { Layout } from "antd";

import TopNav from "./topNav";
import FooterBar from "./footer";

const { Content } = Layout;

const StyledBody = styled(Content)`
  height: 90vh;
  background-color: ${(props) => props.theme.colors.bg_second};
  color: ${(props) => props.theme.colors.text_second};
  padding: ${(props) => (props.theme.isMobile ? "0" : "0px 50px")};
`;

const StyledContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
`;

const PageLayout = ({ children }) => {
  return (
    <Layout className="layout">
      <TopNav />
      <StyledBody>
        <StyledContent className="site-layout-content">
          {children}
        </StyledContent>
      </StyledBody>
      {/* <FooterBar /> */}
    </Layout>
  );
};

export default PageLayout;
