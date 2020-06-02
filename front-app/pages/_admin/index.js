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

// const StyledCard = styled(Card)`
//   width: 300px;
// `;

const EditPage = () => {
  return (
    // <EditBG>
    <StyledRow>
      <Col xs={24} md={24}>
        <Card title="Add content" bordered={false} hoverable>
          <FormEdit />
        </Card>
      </Col>
    </StyledRow>

    // </EditBG>
  );
};

export default EditPage;
