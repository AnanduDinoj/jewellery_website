import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  height: 80vh;
  background: url("/images/hero.jpg") center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.6);
`;

const Hero = () => (
  <HeroSection>
    Bold, Artistic, Unique
  </HeroSection>
);

export default Hero;
