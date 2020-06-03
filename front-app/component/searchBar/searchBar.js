import React from "react";
import { Input, Row, Col, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { debounce } from "lodash";

const StyledSearchBar = styled(Row)`
  margin: 24px 24px;
  width: 80%;
  display: flex;
  align-items: center;
`;

const { Option } = Select;

const Item = styled(Col)``;

const StyledSelector = styled(Select)`
  width: 50%;
  float: right;
  text-align: end;
`;

const StyledOption = styled.div`
  text-align: end;
`;

const options = [
  { text: "Javascript", value: "javascript" },
  { text: "GraphQL", value: "graphql" },
  { text: "Docker", value: "docker" },
];

const SearchBar = ({ onSearch }) => {
  const onSelect = (value) => {
    onSearch(value);
  };

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
        />
      </Item>
      <Item xs={24} md={6}>
        <StyledSelector
          size="large"
          placeholder="tag"
          onChange={onSelect}
          allowClear
        >
          {options.map((ops) => (
            <Option key={ops.value} value={ops.value}>
              <StyledOption>{ops.text}</StyledOption>
            </Option>
          ))}
        </StyledSelector>
      </Item>
    </StyledSearchBar>
  );
};

export default SearchBar;
