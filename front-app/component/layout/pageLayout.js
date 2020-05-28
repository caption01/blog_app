import React from "react";
import styled from "styled-components";
import { Layout } from "antd";

import TopNav from "../nav/topNav";

const { Content, Footer } = Layout;

const StyledBody = styled(Content)`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.bg_second};
  color: ${(props) => props.theme.colors.text_second};
  padding: 0px 50px;
`;

const StyledFooter = styled(Footer)`
  background-color: ${(props) => props.theme.colors.bg_second};
  color: ${(props) => props.theme.colors.text_second};
  text-align: center;
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
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
      <StyledFooter>Nutcha</StyledFooter>
    </Layout>
  );
};

export default PageLayout;
