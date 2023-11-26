import React from "react";
import styled from "styled-components/macro";

const Tokenomics = () => {
  return (
    <Wrapper>
      <Title>Tokenomics</Title>
      <SectionWrapper>
        <Section>
          <SectionTitle>Name: SQUID456</SectionTitle>
          <SectionText>Ticker: SQUID456</SectionText>
        </Section>
        <Section>
          <SectionTitle>Liquidity Locked</SectionTitle>
          <SectionText>Tax: 1/1</SectionText>
        </Section>
        <Section>
          <SectionTitle> 65% Presale tokens </SectionTitle>
          <SectionText>35% Liquidity tokens</SectionText>
        </Section>
      </SectionWrapper>
    </Wrapper>
  );
};

export default Tokenomics;

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff;
  @media (max-width: 1000px) {
    height: 600px;
  }
`;
const Title = styled.div`
  width: 100%;
  height: 20%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 137px;
  line-height: 71px;
  margin-top: 5%;
  text-align: center;
  color: #2a2626;
  @media (max-width: 1000px) {
    font-size: 80px;
  }
  @media (max-width: 500px) {
    font-size: 50px;
  }
`;

const SectionWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }
`;
const Section = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
  border-radius: 15px 15px 15px 15px;
  background-color: #2a2626;
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
  color: #fff;
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
  color: #fff;
`;
