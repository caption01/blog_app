import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Button, Input } from "antd";

import { GET_SEARCH } from "../../utils/query/index";
import { UPDATE_SEARCH } from "../../utils/mutation/index";

const TestingPage = () => {
  const { data } = useQuery(GET_SEARCH);

  const [setSearch] = useMutation(UPDATE_SEARCH);

  const handleSearch = (text) => {
    setSearch({
      variables: { search: text },
    });
  };

  return (
    <div>
      <Input
        placeholder="searching"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default TestingPage;
