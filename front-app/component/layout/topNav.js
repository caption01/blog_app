import React from "react";
import styled from "styled-components";
import { Layout } from "antd";
import { withTheme } from "styled-components";

import SocialContactWebView from "./SocialContactWeb";
import SocialContactMobileView from "./SocialContactMobile";
import { listContact } from "./listContactData";

const { Header } = Layout;

const StyledTopNav = styled(Header)`
  background-color: ${(props) => props.theme.colors.bg_primary};
  color: ${(props) => props.theme.colors.text_primary};
  text-align: center;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const LogoFrame = styled.div`
  position: absolute;
  left: ${(props) => (props.theme.isMobile ? "20px" : "100px")};
  width: 80px;
  margin-right: 24px;

  img {
    width: ${(props) => (props.theme.isMobile ? "100px" : "180px")};
    /* box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2), 0 0 20px 0 rgba(0, 0, 0, 0.19); */
  }
`;

const SocialContact = styled.div`
  position: absolute;
  right: 20px;
  display: flex;
  flex-direction: ${(props) => (props.theme.isMobile ? "column" : "row")};
  align-items: center;
`;

const TopNav = ({ theme }) => {
  const isMobileView = theme?.isMobile;

  return (
    <StyledTopNav>
      <LogoFrame>
        <img src={"./static/stuff_logo_2.png"} alt="logo" />
      </LogoFrame>
      <SocialContact>
        {!isMobileView ? (
          <SocialContactWebView listContact={listContact} />
        ) : (
          <SocialContactMobileView listContact={listContact} />
        )}
      </SocialContact>
    </StyledTopNav>
  );
};

export default withTheme(TopNav);
