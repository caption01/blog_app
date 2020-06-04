import React from "react";
import styled from "styled-components";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

const StyledTopNav = styled(Header)`
  background-color: ${(props) => props.theme.colors.bg_primary};
  color: ${(props) => props.theme.colors.text_primary};
  text-align: center;
  height: 10vh;
  display: flex;
  align-items: center;
`;

const LogoFrame = styled.div`
  width: 80px;
  margin-right: 24px;

  img {
    width: 100%;
  }
`;

const TopNav = () => {
  return (
    <StyledTopNav>
      <LogoFrame>
        <img
          src="https://images-platform.99static.com//fg0J0q4EZcumZ5FuwMY1z9ZZfLw=/431x0:1552x1116/fit-in/500x500/99designs-contests-attachments/114/114898/attachment_114898323"
          alt="Girl in a jacket"
        />
      </LogoFrame>
      <div>
        <span> STICK STUFF </span>
      </div>
    </StyledTopNav>
  );
};

export default TopNav;
