import React from "react";
import styled from "styled-components";

const Frame = styled.div`
  position: relative;
  min-height: 250px;
  display: flex;
  align-items: center;

  img {
    width: 100%;
    object-fit: cover;
    height: 250px;
  }

  :hover .image {
    opacity: 0.4;
  }

  :hover .hiddenText {
    opacity: 1;
  }
`;

const ImageDiv = styled.div`
  width: 100%;
`;

const HiddenText = styled.div`
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  transition: 0.5s ease;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  overflow-wrap: break-word;
  width: 100%;
  height: 150px;
  color: ${(props) => props.theme.colors.text_second};
  padding: 20px 20px;
  font-size: 16px;
`;

const ImageFrame = ({ image, description }) => {
  return (
    <Frame>
      <ImageDiv image={image}>
        <img src={image} alt="Girl in a jacket" className="image" />
      </ImageDiv>
      <HiddenText className="hiddenText">{description}</HiddenText>
    </Frame>
  );
};

export default ImageFrame;
