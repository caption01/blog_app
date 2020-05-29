import React from "react";
import styled from "styled-components";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

const StyledTopNav = styled(Header)`
  background-color: ${(props) => props.theme.colors.bg_primary};
  color: ${(props) => props.theme.colors.text_primary};
  text-align: center;
  height: 10vh;
  display: flex;
  align-items: center;
`;

const TopNav = () => {
  return (
    <StyledTopNav>
      <div>LOGO / WEBSITE NAME </div>
    </StyledTopNav>
  );
};

export default TopNav;
