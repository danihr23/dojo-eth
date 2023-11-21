import React from "react";
import styled from "styled-components/macro";
import telegram from "../components/assets/telegram.png";
import twitter from "../components/assets/twitter.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>JOIN THE GROKSQUID REVOLUTION!</Title>
        <Text>Email: Groksquid@gmail.com</Text>
        <Menu>
          <MediaIcon
            background={telegram}
            to={"https://t.co/qLWuIl82VF"}
            width={37}
            height={37}
          />
          <MediaIcon
            background={twitter}
            to={"https://twitter.com/GROKSQUID69"}
            width={60}
            height={60}
          />
        </Menu>
      </ContentWrapper>
    </Wrapper>
  );
};
export default Footer;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: row;
  align-items: center;
  background: black;
  margin: 136px auto;
  border-radius: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 30px;
  position: relative;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  width: 63%;
  height: 100%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 50px;
  text-align: center;
  color: #2196f3;
  @media (max-width: 1000px) {
    font-size: 30px;
  }
  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

const Text = styled.div`
  width: 90%;
  height: 100%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 45px;
  margin: 10px;
  text-align: center;
  color: #7fe7d8;
  @media (max-width: 1000px) {
    font-size: 28px;
    line-height: 40px;
  }
  @media (max-width: 700px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
const Menu = styled.div`
  width: 25%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 15px
  z-index: 2;
`;
const MediaIcon = styled(Link)`
  width: ${(props) => props.width && props.width}px;
  height: ${(props) => props.height && props.height}px;
  background: transparent url(${(props) => props.background}) top center
    no-repeat;
  background-size: contain;
`;
