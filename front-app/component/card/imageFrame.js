import React from "react";
import styled from "styled-components";

const Frame = styled.div`
  img {
    width: 100%;
  }
`;

const ImageFrame = ({ image }) => {
  return (
    <Frame>
      <img src={image} alt="Girl in a jacket" />
    </Frame>
  );
};

export default ImageFrame;
