import React from "react";
import styled from "styled-components";
import { Layout } from "antd";

const { Footer } = Layout;

const StyledFooter = styled(Footer)`
  background-color: ${(props) => props.theme.colors.bg_primary};
  color: ${(props) => props.theme.colors.text_primary};
  text-align: center;
  height: 5vh;
`;

const FooterBar = () => <StyledFooter>Nutcha</StyledFooter>;

export default FooterBar;
