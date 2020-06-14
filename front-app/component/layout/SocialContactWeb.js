import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { Tooltip } from "antd";
import styled from "styled-components";

import SearchBar from "../searchBar/searchBar";

import { UPDATE_SEARCH } from "../../utils/mutation/index";

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

const SocialContactWebView = ({ listContact = [] }) => {
  const [setSearch] = useMutation(UPDATE_SEARCH);

  const onSearchChange = (value) => {
    setSearch({
      variables: { search: value },
    });
  };

  return (
    <>
      <DivMarginRight>
        <SearchBar onSearch={(value) => onSearchChange(value)} />
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

export default SocialContactWebView;
