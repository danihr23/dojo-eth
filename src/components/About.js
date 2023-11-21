import React from "react";
import styled from "styled-components/macro";

const HomePageAbout = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>ABOUT</Title>
        <Text>
          GrokSquid is a cryptocurrency powered by artificial intelligence. It
          is bringingn the bulishness of GROK with the potential of SQUID!
          Conquering the moon with the power of GrokSquid Inspired by Elon Musk
          and running latest AI! Thanks to AI, GROKSQUID can connect people from
          even the furthest points of the world and take them to the MOON! Buy
          presale button contract address: GrokSquid is about the strength of
          community. Join us as we create a decentralized ecosystem that
          empowers every holder. Elon Musk's AI startup xAI, has been developing
          an inovative AI tool, attempting to be a better and more witty
          ChatGPT, called Grok. With the help of GrokSquid, you could have a
          strong advantage in the upcoming huge Squid Games.
        </Text>
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
  font-size: 35px;
  line-height: 45px;
  margin: 10px;
  text-align: center;
  color: #fff;
  @media (max-width: 1000px) {
    font-size: 28px;
    line-height: 40px;
  }
  @media (max-width: 700px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
