import React from "react";
import styled from "styled-components/macro";
import logo from "../components/assets/logo.png";
import mediaIcon from "../components/assets/mediaIcon.png";
import twitterIcon from "../components/assets/twitterIcon.png";
//mport { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Wrapper>
      <Logo />
      <TextWrapper>
        <NavTool>
          Roadmapdslhsahdsajhdkahdkahdkahdkjahdksahdkjahdkajhdkashdkjdhakdhsakhdkjashdkjashdkashk
        </NavTool>
      </TextWrapper>
      <Menu>
        <MediaIcon background={mediaIcon} />
        <MediaIcon background={twitterIcon} />
      </Menu>
    </Wrapper>
  );
};
export default Navigation;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  color: white;
  background-color: transparent;
  width: 100%;
  height: 120px;
`;

const Logo = styled.div`
  height: 27px;
  z-index: 2;
  background: transparent url(${logo}) top center no-repeat;
  background-size: contain;
  width: 25%;
  /* @media (x-width: 1100px) {
    height: 20px;
  }

  @media (max-width: 640px) {
    height: 16px;
  }

  @media (max-width: 440px) {
    height: 12px;
    left: 9px;
    top: 4px;
  } */
`;
const Menu = styled.div`
  width: 25%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 2;
  /* @media (max-width: 1100px) {
    width: 53%;
  }

  @media (max-width: 640px) {
    width: 62%;
  }

  @media (max-width: 440px) {
    width: 72%;
  } */
`;
const NavTool = styled.div`
  font-family: "Inter", sans-serif;
  width: 100%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  margin: 0 auto;
  font-size: 20px;
  /* @media (max-width: 1100px) {
    height: 14px;

    font-size: 10px;
    line-height: 13px;
  }

  @media (max-width: 640px) {
    height: 12px;

    font-size: 8px;
    line-height: 15px;
  }

  @media (max-width: 440px) {
    height: 10px;

    font-size: 6px;
    line-height: 12px;
  } */
`;
const TextWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 12px;
  height: 100%;
`;

const MediaIcon = styled.div`
  width: 24px;
  height: 19px;
  background: transparent url(${(props) => props.background}) top center
    no-repeat;
  background-size: contain;
  /* @media (max-width: 1100px) {
    width: 20px;
    height: 15px;
  }

  @media (max-width: 640px) {
    width: 18px;
    height: 13px;
  }

  @media (max-width: 440px) {
    width: 16px;
    height: 11px;
  } */
`;
