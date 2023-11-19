import React from "react";
import styled from "styled-components/macro";
import imageOne from "../components/assets/imagaOne.png";
import imageTWo from "../components/assets/imageTwo.png";
import imagaThree from "../components/assets/imageThree.png";

const SocialMediaSection = () => {
  return (
    <Wrapper>
      <Section background={imageOne} />
      <SectionWrapper>
        <Section background={imageTWo} />
        <Section background={imagaThree} />
      </SectionWrapper>
    </Wrapper>
  );
};

export default SocialMediaSection;

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
  background-color: black;
  @media (max-width: 700px) {
    flex-direction: column;
    height: 600px;
  }
`;
// const Title = styled.div`
//   width: 100%;
//   height: 20%;
//   font-family: "Inter";
//   font-style: normal;
//   font-weight: 700;
//   font-size: 137px;
//   line-height: 71px;
//   margin-top: 20%;
//   text-align: center;
//   color: #2a2626;
//   @media (max-width: 1000px) {
//     font-size: 80px;
//   }
//   @media (max-width: 500px) {
//     font-size: 50px;
//   }
// `;

const SectionWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Section = styled.div`
  vertical-align: middle;
  display: inline-block;
  height: 100%;
  width: 100%;
  border: none;
  border-radius: 0;
  box-shadow: none;
  background: transparent url(${(props) => props.background}) top center
    no-repeat;
  background-size: contain;
  margin: 15px;
`;

// const FirstSection = styled.div`
//   vertical-align: middle;
//   display: inline-block;
//   height: 100%;
//   width: 100%;
//   border: none;
//   border-radius: 0;
//   box-shadow: none;
//   background: transparent url(${(props) => props.background}) top center
//     no-repeat;
//   background-size: contain;
//   margin: 15px;

// `;
