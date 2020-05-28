import React from "react";
import { Input, Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import styled from "styled-components";

const StyledSearchBar = styled(Row)`
  margin: 24px 24px;
  width: 80%;
`;

const Item = styled(Col)``;

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <Item xs={24} md={24}>
        <Input
          size="large"
          placeholder="What are you looking?"
          suffix={<SearchOutlined />}
        />
      </Item>
    </StyledSearchBar>
  );
};

export default SearchBar;
