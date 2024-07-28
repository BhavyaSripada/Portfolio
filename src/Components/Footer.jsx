import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  margin-top: 15px;
  color: #fff;
  text-align: center;
  padding: 90px 30px;
  height:50px;
`;

const FooterLine = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 1px;
  background-color: #fff;
`;

const Credits = styled.p`
  margin: 10px 0 0;
  font-size: 20px;
  font-family:'Source Code Pro',sans-serif;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLine />
      <Credits>Credits:<a href="https://pngtree.com/freepng/aerospace-astronaut-cartoon-illustration_4524462.html?sol=downref&id=bef">astronaut clipart PNG Designed By 588ku from  pngtree</a></Credits>
      
    </FooterContainer>
  );
};

export default Footer;
