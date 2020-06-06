import React from "react";
import { Form, Input, Button, Select } from "antd";
import styled from "styled-components";
import { useRouter } from "next/router";

import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const { Option } = Select;

const StyledButton = styled(Button)`
  background-color: ${(props) => props?.theme?.colors?.bg_primary};
  border-color: unset;
  color: ${(props) => props?.theme?.colors?.text_primary};
  margin-right: 20px;

  :hover {
    background-color: ${(props) => props?.theme?.colors?.bg_primary};
    color: ${(props) => props?.theme?.colors?.text_primary};
    opacity: 0.5;
    border-color: unset;
  }
`;

const layoutStyled = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const ADD_CONTENT = gql`
  mutation createPost($data: CreatePostInput!) {
    createPost(data: $data) {
      id
      title
    }
  }
`;

const UPDATE_CONTENT = gql`
  mutation updatePost($id: String!, $data: UpdatePostInput!) {
    updatePost(id: $id, data: $data) {
      id
      title
    }
  }
`;

const DELETE_CONTENT = gql`
  mutation deletePost($id: String!) {
    deletePost(id: $id) {
      id
      title
    }
  }
`;

const FormEdit = ({ post }) => {
  const router = useRouter();
  const [form] = Form.useForm();

  const [crateContent, { newData }] = useMutation(ADD_CONTENT);
  const [updateContent, { updatedData }] = useMutation(UPDATE_CONTENT);
  const [deleteContent, { deletedData }] = useMutation(DELETE_CONTENT);

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

    if (post?.id) {
      updateContent({
        variables: { id: post?.id, data: dataTransform },
      }).then((resp) => {
        router.push("/");
      });
      return;
    }

    crateContent({ variables: { data: dataTransform } }).then((resp) => {
      router.push("/");
    });
  };

  const handleChange = (value, key) => {
    form.setFieldsValue({ key: value });
  };

  const handleDelete = (postId) => {
    deleteContent({
      variables: { id: postId },
    }).then((resp) => {
      router.push("/");
    });
  };

  if (post) {
    form.setFieldsValue({ ["title"]: post?.title });
    form.setFieldsValue({ ["description"]: post?.description });
    form.setFieldsValue({ ["image"]: post?.image });
    form.setFieldsValue({ ["tags"]: post?.tags });
    form.setFieldsValue({ ["links"]: post?.links });
  }

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
          <StyledButton onClick={() => handleDelete(post?.id)}>
            {" "}
            Delete{" "}
          </StyledButton>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormEdit;
