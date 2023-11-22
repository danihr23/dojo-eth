import React from "react";
import styled from "styled-components/macro";
import Navigation from "./Navigation";
import logoNew from "../components/assets/logoNew.png";
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
        <Title>SQUID456</Title>
        <Text>
          And remember, chances like this don't come twice! This is your moment
          – will you take it?
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
  height: 1120px;
  @media (max-width: 1000px) {
    height: 800px;
  }
  @media (max-width: 500px) {
    height: 600px;
  }
`;
const Logo = styled.div`
  height: 65%;
  width: 100%;
  //border-radius: 360px 360px 360px 360px;
  margin: 50px auto 0 auto;
  background: transparent url(${logoNew}) top center no-repeat;
  background-size: 100% 100%;
  @media (max-width: 1000px) {
    height: 55%;
  }
  @media (max-width: 500px) {
    height: 45%;
  }
`;
const Title = styled.span`
  width: 100%;
  margin: 20px auto 0;
  font-family: "Inter";
  font-weight: 700;
  font-size: 104px;
  color: #ffffff;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 80px;
  }
  @media (max-width: 500px) {
    font-size: 50px;
  }
`;
const Text = styled.div`
  width: 100%;
  font-family: "Inter";
  font-style: normal;
  font-size: 28px;
  text-align: center;
  color: #fff;
  @media (max-width: 1000px) {
    font-size: 28px;
  }
  @media (max-width: 700px) {
    font-size: 17px;
  }
`;
