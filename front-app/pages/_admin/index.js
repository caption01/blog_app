import React from "react";
import { Card, Row, Col } from "antd";
import styled from "styled-components";

import FormEdit from "../../component/form/form";

const StyledRow = styled(Row)`
  display: flex;
  align-items: center;
  padding: 50px;
  width: 100%;
`;

const EditPage = () => {
  return (
    <StyledRow>
      <Col xs={24} md={24}>
        <Card title="Add content" bordered={false} hoverable>
          <FormEdit />
        </Card>
      </Col>
    </StyledRow>
  );
};

export default EditPage;
