import React from "react";
import styled from "styled-components/macro";

const SocialMediaSection = () => {
  return (
    <Wrapper>
      <Title>RoadMap</Title>
      <SectionWrapper>
        <Section>
          <SectionTitle>Phase 1:</SectionTitle>
          <SectionText>Concept creation</SectionText>
          <SectionText>Draft a plan</SectionText>
          <SectionText>Token creation</SectionText>
          <SectionText>X and Telegram community </SectionText>
          <SectionText>development</SectionText>
          <SectionText>KYC and Audit</SectionText>
          <SectionText>KPresale on Pinksale</SectionText>
        </Section>

        <Section>
          <SectionTitle>Phase 2:</SectionTitle>
          <SectionText>Marketing campaign </SectionText>
          <SectionText>CoinMarketCap listing </SectionText>
          <SectionText>CoinGeko listing</SectionText>
        </Section>
        <Section>
          <SectionTitle>Phase 3:</SectionTitle>
          <SectionText>Attracting 5000 holders </SectionText>
          <SectionText>Partners announcement </SectionText>
          <SectionText>Listing on more CEXs</SectionText>
        </Section>
      </SectionWrapper>
    </Wrapper>
  );
};

export default SocialMediaSection;

const Wrapper = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
  background-color: black;
  @media (max-width: 1000px) {
    height: 1150px;
  }
`;

const SectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
  margin: 10px auto;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Section = styled.div`
  width: 32%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
  border-radius: 360px 360px 360px 360px;
  background-color: #a2bfcd;
  margin: 10px;
  @media (max-width: 1000px) {
    width: 55%;
    height: 330px;
  }
  @media (max-width: 1000px) {
    width: 90%;
    height: 330px;
  }
`;

const SectionTitle = styled.div`
  width: 100%;
  height: 18%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 42px;
  text-align: center;
  color: #2a2626;
`;
const SectionText = styled.div`
  width: 100%;
  height: 25%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 17px;
  text-align: center;
  color: #2a2626;
`;
const Title = styled.div`
  width: 100%;
  height: 20%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 100px;
  line-height: 21px;
  margin-top: 5%;
  text-align: center;
  color: #fff;
  @media (max-width: 1000px) {
    font-size: 70px;
  }
  @media (max-width: 500px) {
    font-size: 50px;
  }
`;
