import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import pinkmood from "../components/assets/pinkmoon.png";
import dexView from "../components/assets/dex-view-logo.png";
const HomePageAbout = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>ABOUT</Title>
        <Text>
          SQUID GAME : The Challenge is aired on Netflix on 22 November 2023.
          The series will be released across three weeks with three episode
          drops of varying sizes. 456 real players compete against each other
          like in Netflix’s Korean drama series that dominated the charts back
          in 2021. The Prize is $4.56 million, the largest prize pot in game
          show history. Second season is scheduled for next year.
        </Text>
        <PartnersWrapper>
          <Text fontSize={44}> Partners: </Text>
          <SectionWrapper>
            <Partners
              background={pinkmood}
              to={"https://www.pinksale.finance"}
              width={75}
              height={75}
            />
            <Partners
              background={dexView}
              to={"https://www.dexview.com/"}
              width={75}
              height={75}
            />
          </SectionWrapper>
        </PartnersWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};
export default HomePageAbout;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
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
  width: 100%;
  height: 20%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 137px;
  line-height: 39px;
  text-align: center;
  color: #fff;
  @media (max-width: 1000px) {
    font-size: 80px;
  }
  @media (max-width: 500px) {
    font-size: 50px;
  }
`;

const Text = styled.div`
  width: 90%;
  height: 100%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "35")}px;
  line-height: 45px;
  margin: 10px;
  text-align: center;
  color: #fff;
  @media (max-width: 1000px) {
    font-size: ${(props) => (props.fontSize ? props.fontSize : "28")}px;
    line-height: 40px;
  }
  @media (max-width: 700px) {
    font-size: ${(props) => (props.fontSize ? props.fontSize : "18")}px;
    line-height: 22px;
  }
`;
const PartnersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 30px;
  position: relative;
  width: 100%;
  height: 100%;
`;

const SectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
  margin: 10px auto;
`;
const Partners = styled(Link)`
  width: ${(props) => props.width && props.width}px;
  height: ${(props) => props.height && props.height}px;
  background: transparent url(${(props) => props.background}) top center
    no-repeat;
  background-size: contain;
`;
