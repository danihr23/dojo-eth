import React from "react";
import styled from "styled-components/macro";
import Navigation from "./Navigation";
import robo_logo from "../components/assets/robo_logo.png";
import HomePageAbout from "./About";
import Tokenomics from "./Tokenomics";
import SocialMediaSection from "./SocialMediaSection";
import Footer from "./Footer";
const HomePage = () => {
  return (
    <HomePageWrapper>
      <HomeSection>
        <Navigation />
        <Logo />
        <Title> GROKSQUID</Title>
        <Text>
          GROKSQUID is a cryptocurrency powered by artificial intelligence.
        </Text>
      </HomeSection>
      <HomePageAbout />
      <Tokenomics />
      <SocialMediaSection />
      <Footer />
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
  background-color: #142532;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 720px;
`;
const Logo = styled.div`
  height: 43%;
  width: 300px;
  border-radius: 360px 360px 360px 360px;
  margin: 50px auto 0 auto;
  background: transparent url(${robo_logo}) top center no-repeat;
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
