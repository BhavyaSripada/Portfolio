
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';


const CardContainer = styled(motion.div)`
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  margin: 10px;
  width: 300px;
  height: ${(props) => (props.expanded ? '500px' : '150px')};
  transition: height 0.3s ease;
  border:2px solid white;
  position: relative;
`;

const CardContent = styled.div`
  padding: 20px;
`;


const Button = styled.button`
  background-color: #ffffff;
  color: #000000;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-family:'Source Code Pro',sans-serif;
  position: absolute; 
  bottom: 30px;
`;

const Card = ({ title, content,url }) => {
  const [expanded, setExpanded] = useState(false);
  
  const handleClick = () => {
    if(url){
      window.open(url,'_blank');
    }
  }
  return (
    <CardContainer
      expanded={expanded}
      onHoverStart={() => setExpanded(!expanded)}
      layout
      initial={{ borderRadius: 10 }}
    >
      <CardContent>
        <h3 >{title}</h3>
        {expanded && 
          <>
          <p>{content}</p>
          {<Button onClick={handleClick}>VIEW PROJECT</Button>}
          </>
        }
      </CardContent>
    </CardContainer>
  );
};

export default Card;
