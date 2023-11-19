import React from "react";
import styled from "styled-components/macro";
import Navigation from "./Navigation";
import robo_dog from "../components/assets/robo_dog.png";
import HomePageAbout from "./About";
import Tokenomics from "./Tokenomics";
const HomePage = () => {
  return (
    <HomePageWrapper>
      <HomeSection>
        <Navigation />
        <Logo />
        <Title>DOJO</Title>
        <Text>Dani Hristov Tesla owner</Text>
        <Button>Button</Button>
      </HomeSection>
      <HomePageAbout />
      <Tokenomics />
    </HomePageWrapper>
  );
};
export default HomePage;
const HomePageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: black;
`;
const HomeSection = styled.div`
  background-color: #141432;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 720px;
`;
const Logo = styled.div`
  height: 45%;
  width: 100%;
  margin: 50px auto 0 auto;
  background: transparent url(${robo_dog}) top center no-repeat;
  background-size: contain;
`;
const Title = styled.span`
  width: 100%;
  margin: 20px auto 0;
  font-family: "Inter";
  font-weight: 700;
  font-size: 104px;
  color: #ffffff;
  text-align: center;
`;
const Text = styled.div`
  width: 100%;
  font-family: "Inter";
  font-style: normal;
  font-size: 28px;
  text-align: center;
  color: #fff;
`;
const Button = styled.div`
  width: 170px;
  height: 58px;
  background: #fff;
  border-radius: 10px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;
