import React from "react";
import styled from "styled-components/macro";
import navLogo from "../components/assets/navLogo.png";
import telegram from "../components/assets/telegram.png";
import twitter from "../components/assets/twitter.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Wrapper>
      <Logo to={"/"} />
      <TextWrapper>
        <NavTool>0xfe655a67B7Ca7b6A0B7179E5B228b602A7e3e39b</NavTool>
      </TextWrapper>
      <Menu>
        <MediaIcon
          background={telegram}
          to={"https://t.co/qLWuIl82VF"}
          width={37}
          height={37}
        />
        <MediaIcon
          background={twitter}
          to={"https://twitter.com/Squid456456"}
          width={60}
          height={60}
        />
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

const Logo = styled(Link)`
  height: 50%;
  border-radius: 360px 360px 360px 360px;
  width: 63px;
  margin-left: 25px;
  z-index: 2;
  background: transparent url(${navLogo}) top center no-repeat;
  background-size: contain;
`;
const Menu = styled.div`
  width: 25%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 2;
`;
const NavTool = styled.div`
  font-family: "Inter", sans-serif;
  width: 100%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  margin: 0 auto;
  font-size: 20px;
  text-align: center;
`;
const TextWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 12px;
  height: 100%;
`;

const MediaIcon = styled(Link)`
  width: ${(props) => props.width && props.width}px;
  height: ${(props) => props.height && props.height}px;
  background: transparent url(${(props) => props.background}) top center
    no-repeat;
  background-size: contain;
`;
