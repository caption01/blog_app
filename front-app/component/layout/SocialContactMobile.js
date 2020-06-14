import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Menu } from "antd";
import styled from "styled-components";

import SearchBar from "../searchBar/searchBar";

import { UPDATE_SEARCH } from "../../utils/mutation/index";

const DivMarginRight = styled.div`
  margin: 0px 20px;
`;

const StyledButton = styled.div`
  background-color: ${(props) => props.theme.colors.bg_primary};
  font-size: 20px;
`;

const SocialContactMobileView = ({ listContact = [] }) => {
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
        title="StuffStick"
        placement="right"
        closable={false}
        onClose={() => onClose()}
        visible={visible}
      >
        <DivMarginRight>
          <SearchBar onSearch={(value) => onSearchChange(value)} />
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

export default SocialContactMobileView;
