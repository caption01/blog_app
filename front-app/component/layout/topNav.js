import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/react-hooks";
import styled from "styled-components";
import { Layout, Drawer, Menu, Tooltip } from "antd";
import { withTheme } from "styled-components";
import { MenuOutlined } from "@ant-design/icons";

import SocialContactWebView from "./SocialContactWeb";
import SocialContactMobileView from "./SocialContactMobile";
import SearchBar from "../searchBar/searchBar";
import { listContact } from "./listContactData";

import { UPDATE_SEARCH } from "../../utils/mutation/index";

const { Header } = Layout;

//mainTopNav - styled
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

//webView - styled
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

const DivMarginRight = styled.div`
  margin: 0px 20px;
`;

//moblieBiew - styled
const StyledButton = styled.div`
  background-color: ${(props) => props.theme.colors.bg_primary};
  font-size: 20px;
`;

const renderContactWeb = (listContact, callback) => {
  return (
    <>
      <DivMarginRight>
        <SearchBar onSearch={(value) => callback(value)} />
      </DivMarginRight>
      {listContact.map((contact) => {
        return (
          <Tooltip title={contact.title} key={contact.key}>
            <IconDiv>
              <a target="_blank" href={contact.url}>
                {contact.icon}
              </a>
            </IconDiv>
          </Tooltip>
        );
      })}
    </>
  );
};

const renderContactMoblie = (listContact, callback) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <StyledButton type="primary" onClick={() => showDrawer()}>
        <MenuOutlined />
      </StyledButton>
      <Drawer
        title="StuffStick"
        placement="right"
        closable={false}
        onClose={() => onClose()}
        visible={visible}
      >
        <DivMarginRight>
          <SearchBar onSearch={(value) => callback(value)} />
        </DivMarginRight>
        <Menu style={{ width: 256, marginTop: "20px" }} mode="inline">
          {listContact.map((contact) => {
            return (
              <Menu.Item key={contact.key}>
                {contact.icon}
                <a target="_blank" href={contact.url}>
                  {contact.title}
                </a>
              </Menu.Item>
            );
          })}
        </Menu>
      </Drawer>
    </>
  );
};

const TopNav = ({ theme }) => {
  const isMobileView = theme?.isMobile;
  const [setSearch] = useMutation(UPDATE_SEARCH);

  const handleSearchChange = (value) => {
    setSearch({
      variables: { search: value },
    });
  };

  return (
    <StyledTopNav>
      <LogoFrame>
        <img src={"./static/stuff_logo_2.png"} alt="logo" />
      </LogoFrame>
      <SocialContact>
        {isMobileView
          ? renderContactMoblie(listContact, handleSearchChange)
          : renderContactWeb(listContact, handleSearchChange)}
      </SocialContact>
    </StyledTopNav>
  );
};

export default withTheme(TopNav);
