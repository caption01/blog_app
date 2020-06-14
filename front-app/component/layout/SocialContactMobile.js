import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Menu } from "antd";
import styled, { withTheme } from "styled-components";

import SearchBar from "../searchBar/searchBar";

import { UPDATE_SEARCH } from "../../utils/mutation/index";

const DivMarginRight = styled.div`
  margin: 0;
`;

const StyledButton = styled.div`
  background-color: ${(props) => props.theme.colors.bg_primary};
  font-size: 28px;

  :hover {
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 29px 19px rgba(0, 0, 0, 0.52);
    -moz-box-shadow: 0px 0px 29px 19px rgba(0, 0, 0, 0.52);
    box-shadow: 0px 0px 29px 19px rgba(0, 0, 0, 0.52);
  }
`;

const StyledIcon = styled.div`
  span {
    font-size: 24px;
  }
`;

const StyledDrawTitle = styled.div`
  color: #fff;
  letter-spacing: 3px;
  text-align: center;
`;

const SocialContactMobileView = ({ listContact = [], theme }) => {
  const bgPrimaryColor = theme?.colors?.bg_primary;
  const [visible, setVisible] = useState(false);
  const [setSearch] = useMutation(UPDATE_SEARCH);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const onSearchChange = (value) => {
    setSearch({
      variables: { search: value },
    });
  };

  return (
    <>
      <StyledButton type="primary" onClick={() => showDrawer()}>
        <MenuOutlined />
      </StyledButton>
      <Drawer
        title={<StyledDrawTitle>StuffStick</StyledDrawTitle>}
        placement="right"
        closable={false}
        onClose={() => onClose()}
        visible={visible}
        headerStyle={{ backgroundColor: bgPrimaryColor }}
      >
        <DivMarginRight>
          <SearchBar onSearch={(value) => onSearchChange(value)} />
        </DivMarginRight>
        <Menu style={{ width: 256, marginTop: "20px" }} mode="inline">
          {listContact.map((contact) => {
            return (
              <Menu.Item key={contact.key}>
                <StyledIcon>
                  {contact.icon}
                  <a target="_blank" href={contact.url}>
                    {contact.title}
                  </a>
                </StyledIcon>
              </Menu.Item>
            );
          })}
        </Menu>
      </Drawer>
    </>
  );
};

export default withTheme(SocialContactMobileView);
