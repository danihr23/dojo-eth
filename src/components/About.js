import React from "react";
import styled from "styled-components/macro";

const HomePageAbout = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>ABOUT</Title>
        <Text>
          Ut et sodales mauris, in mollis magna. Maecenas dignissim vulputate
          tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aliquam non nisi nec massa maximus facilisis. Integer vestibulum,
          metus at blandit bibendum, tortor mauris cursus arcu, ac ultrices urna
          metus vitae ipsum.
        </Text>
      </ContentWrapper>
    </Wrapper>
  );
};
export default HomePageAbout;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 351.01px;
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
  width: 100%;
  height: 38%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 41px;
  line-height: 41px;
  text-align: center;
  color: #fff;
  @media (max-width: 1000px) {
    font-size: 33px;
    line-height: 40px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
    line-height: 35px;
  }
`;
