import React from "react";
import { Form, Input, Button, Select } from "antd";
import styled from "styled-components";
import { useRouter } from "next/router";

import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const { Option } = Select;

const ADD_CONTENT = gql`
  mutation createPost($data: CreatePostInput!) {
    createPost(data: $data) {
      id
      title
    }
  }
`;

const StyledButton = styled(Button)`
  background-color: ${(props) => props?.theme?.colors?.bg_primary};
  border-color: unset;
  color: ${(props) => props?.theme?.colors?.text_primary};

  :hover {
    background-color: ${(props) => props?.theme?.colors?.bg_primary};
    color: ${(props) => props?.theme?.colors?.text_primary};
    opacity: 0.5;
    border-color: unset;
  }
`;

const children = [];

const FormEdit = () => {
  const [form] = Form.useForm();
  const [crateContent, { data }] = useMutation(ADD_CONTENT);
  const router = useRouter();

  const transformData = (data) => {
    return {
      ...data,
      tags: {
        set: data?.tags,
      },
      links: {
        set: data?.links,
      },
    };
  };

  const onFinish = (data) => {
    const dataTransform = transformData(data);

    crateContent({ variables: { data: dataTransform } }).then((resp) => {
      router.push("/");
    });
  };

  const handleChange = (value, key) => {
    form.setFieldsValue({ key: value });
  };

  const layoutStyled = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  return (
    <div>
      <Form
        {...layoutStyled}
        layout="horizontal"
        form={form}
        onFinish={onFinish}
        labelAlign="left"
      >
        <Form.Item label="Title" name="title">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Image" name="image">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Tags" name="tags">
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="Tags Mode"
            onChange={(value) => handleChange(value, "tags")}
          >
            <Option key="js" value="javascript">
              Javascript
            </Option>
            <Option key="graph-ql" value="graphql">
              GraphQL
            </Option>
            <Option key="docker" value="docker">
              Docker
            </Option>
          </Select>
        </Form.Item>

        <Form.Item label="Links" name="links">
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="Tags Mode"
            onChange={(value) => handleChange(value, "links")}
          ></Select>
        </Form.Item>

        <Form.Item wrapperCol={{ ...layoutStyled.wrapperCol, offset: 8 }}>
          <StyledButton htmlType="submit"> Submit </StyledButton>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormEdit;
