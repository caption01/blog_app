import React from "react";
import { Input, Row, Col, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import styled from "styled-components";

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
  { text: "Javascript", value: 0 },
  { text: "GraphQL", value: 1 },
  { text: "Docker", value: 2 },
];

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <Item xs={24} md={18}>
        <Input
          size="large"
          placeholder="What are you looking?"
          suffix={<SearchOutlined />}
        />
      </Item>
      <Item xs={24} md={6}>
        <StyledSelector size="large" placeholder="Select tag">
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
