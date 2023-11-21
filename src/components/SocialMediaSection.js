import React from "react";
import styled from "styled-components/macro";

const SocialMediaSection = () => {
  return (
    <Wrapper>
      <Title>RoadMap</Title>
      <SectionWrapper>
        <Section>
          <SectionTitle>Step1</SectionTitle>
          <SectionText>Buy SQUID456</SectionText>
        </Section>

        <Section>
          <SectionTitle>Step2</SectionTitle>
          <SectionText>HODL & VIBE</SectionText>
        </Section>
        <Section>
          <SectionTitle>Step3</SectionTitle>
          <SectionText>MEME TAKEOVER</SectionText>
        </Section>
      </SectionWrapper>
    </Wrapper>
  );
};

export default SocialMediaSection;

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
  background-color: black;
  @media (max-width: 1000px) {
    height: 600px;
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
  width: 30%;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
  border-radius: 360px 360px 360px 360px;
  background-color: #a2bfcd;
  margin: 10px;
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
