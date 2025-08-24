import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  background: #333;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  font-family: 'Arial', sans-serif;
`;

const Footer = () => (
  <Foot>
    <p>© 2025 Jewel Whirl. All rights reserved.</p>
    <p>Follow us: Instagram | Facebook | Pinterest</p>
  </Foot>
);

export default Footer;
