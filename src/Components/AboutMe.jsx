
import { Container, TextContainer, ImageContainer, ParagraphContainer } from './StyledComponents';
import  {GlobalStyle} from './GlobalStyle'
import { CardContainer,Card } from './StyledComponents';
import { motion } from 'framer-motion';
import { BiCodeBlock } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa6";
import { FaServer } from "react-icons/fa";
const AboutMe=()=>{
    

  const cardData = [
    {
      icon: <BiCodeBlock size={40} color="white" />,
      title: 'Frontend',
      content:<p>Utitilized <span style={{fontWeight:'bold'}}> React</span> and <span style={{fontWeight:'bold'}}>Material UI</span> to develop Projects</p>
    },
    {
      icon:<FaDatabase size={40} color="white" />,
      title: 'Database',
      content: <p>Experience spans across <span style={{fontWeight:'bold'}}> MySQL and PostgreSQL </span>, integrating these technologies into my projects for efficient data management</p>
    },
    {
      icon:<FaServer size={40} color="white"/>,
      title: 'Backend',
      content: <p>Utilized <span style={{fontWeight:'bold'}}>GraphQL</span> for flexible and efficient data management, and incorporate  <span style={{fontWeight:'bold'}}>Flask/Python</span> and <span style={{fontWeight:'bold'}}>Socket.IO</span> for effective real-time communication in my projects.</p>
    }
  ];
   return (
    <>
      <GlobalStyle/ >
      <h1 style={{ color:'white',marginTop:120,textAlign: 'center' }}>
      ABOUT ME
      </h1>
        <ParagraphContainer>
        Hi! I'm Bhavya, an engineering student with a passion for creating innovative solutions.
        </ParagraphContainer>
        <CardContainer>
        {cardData.map((card, index) => (
          <Card key={index}>
          <div style={{ padding: '20px',textAlign:'center'}}>
          {card.icon}
          <h2>{card.title}</h2>
          <p>{card.content}</p>
        </div>
          </Card>
        ))}
      </CardContainer>
     
     
    </>
    );
}

export default AboutMe