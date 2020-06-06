import React from "react";
import { Input, Row, Col, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { debounce } from "lodash";

const StyledSearchBar = styled(Row)`
  width: ${(props) => (props?.theme?.isMobile ? "250px" : "60%")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Item = styled(Col)``;

const SearchBar = ({ onSearch, searchState }) => {
  const onSearching = debounce((value) => {
    onSearch(value);
  }, 500);

  return (
    <StyledSearchBar>
      <Item xs={24} md={18}>
        <Input
          size="large"
          placeholder="What are you looking?"
          suffix={<SearchOutlined />}
          onChange={(e) => onSearching(e.target.value)}
          defaultValue={searchState}
          allowClear
        />
      </Item>
    </StyledSearchBar>
  );
};

export default SearchBar;
