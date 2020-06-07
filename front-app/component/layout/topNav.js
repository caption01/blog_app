import React from "react";
import styled from "styled-components";
import { Layout, Tooltip } from "antd";
import {
  FacebookOutlined,
  MediumOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const StyledTopNav = styled(Header)`
  background-color: ${(props) => props.theme.colors.bg_primary};
  color: ${(props) => props.theme.colors.text_primary};
  text-align: center;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const LogoFrame = styled.div`
  position: absolute;
  left: ${(props) => (props.theme.isMobile ? "0px" : "100px")};
  width: 80px;
  margin-right: 24px;

  img {
    width: ${(props) => (props.theme.isMobile ? "50px" : "100px")};
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2), 0 0 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const SocialContact = styled.div`
  position: absolute;
  right: ${(props) => (props.theme.isMobile ? "0px" : "20px")};
  display: flex;
  flex-direction: ${(props) => (props.theme.isMobile ? "column" : "row")};
  align-items: center;
`;

const IconDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 20px;

  a {
    color: inherit;
    line-height: ${(props) => (props.theme.isMobile ? "20px" : "40px")};
    font-size: ${(props) => (props.theme.isMobile ? "20px" : "40px")};
  }

  :hover {
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 29px 19px rgba(0, 0, 0, 0.52);
    -moz-box-shadow: 0px 0px 29px 19px rgba(0, 0, 0, 0.52);
    box-shadow: 0px 0px 29px 19px rgba(0, 0, 0, 0.52);
  }
`;

const WebSiteName = styled.span`
  font-size: ${(props) => (props.theme.isMobile ? "20px" : "40px")};

  -webkit-animation: text-shadow-pop-br 0.6s both;
  animation: text-shadow-pop-br 0.6s both;

  @-webkit-keyframes text-shadow-pop-br {
    0% {
      text-shadow: 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555,
        0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555;
      -webkit-transform: translateX(0) translateY(0);
      transform: translateX(0) translateY(0);
    }
    100% {
      text-shadow: 1px 1px #555555, 2px 2px #555555, 3px 3px #555555,
        4px 4px #555555, 5px 5px #555555, 6px 6px #555555, 7px 7px #555555,
        8px 8px #555555;
      -webkit-transform: translateX(-8px) translateY(-8px);
      transform: translateX(-8px) translateY(-8px);
    }
  }
  @keyframes text-shadow-pop-br {
    0% {
      text-shadow: 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555,
        0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555;
      -webkit-transform: translateX(0) translateY(0);
      transform: translateX(0) translateY(0);
    }
    100% {
      text-shadow: 1px 1px #555555, 2px 2px #555555, 3px 3px #555555,
        4px 4px #555555, 5px 5px #555555, 6px 6px #555555, 7px 7px #555555,
        8px 8px #555555;
      -webkit-transform: translateX(-8px) translateY(-8px);
      transform: translateX(-8px) translateY(-8px);
    }
  }
`;

const TopNav = () => {
  return (
    <StyledTopNav>
      <LogoFrame>
        <img src={"./static/logo_stuff.png"} alt="logo" />
      </LogoFrame>
      <div>
        <WebSiteName className="text-pop-up-top"> STICK STUFF </WebSiteName>
      </div>

      <SocialContact>
        <Tooltip title={"let's talk"} key={"1"}>
          <IconDiv>
            <a
              target="_blank"
              href={"https://www.facebook.com/Codeaday-100465451394219"}
            >
              <FacebookOutlined />
            </a>
          </IconDiv>
        </Tooltip>
        <Tooltip title={"Writer Journey"} key={"2"}>
          <IconDiv>
            <a target="_blank" href={"https://medium.com/@nutchapon.han"}>
              <MediumOutlined />
            </a>
          </IconDiv>
        </Tooltip>
        <Tooltip title={"Biography"} key={"3"}>
          <IconDiv>
            <a
              target="_blank"
              href={
                "https://www.linkedin.com/in/nutchapon-hanouypornlert-85794a174/"
              }
            >
              <LinkedinOutlined />
            </a>
          </IconDiv>
        </Tooltip>
      </SocialContact>
    </StyledTopNav>
  );
};

export default TopNav;
