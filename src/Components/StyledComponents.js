// Layout.js
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self:center;
  margin-top: 20px;
  color:white;
`;

export const TextContainer = styled.div`
  flex: 1;
  padding-left: 50px;
  font-family:'Anurati-Regular',sans-serif;
`;

export const ImageContainer = styled.div`
  flex: 1;
  text-align: right;

  img {
    max-width:100%;
    height: auto;
  }
`;
export const ParagraphContainer = styled.div`
  text-align:center;
  font-family:'Source Code Pro',sans-serif;
  color:white;
  font-size:large;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 120px;
  font-family:'Source Code Pro',sans-serif;
   
`;


export const Card = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  color:white;
  padding:10px;
  font-family:'Source Code Pro',sans-serif;
  border:2px solid white;
 
`;




