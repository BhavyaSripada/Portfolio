
import { Container, TextContainer, ImageContainer } from './StyledComponents';
import  {GlobalStyle} from './GlobalStyle'
import { motion } from 'framer-motion';

const Intro=()=>{
    const title = "BHAVYA".split("");

   return (
    <>
      <GlobalStyle />
      <Container>
        <TextContainer>
          <h1>
            {title.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i / 10 }}
                style={{ display: 'inline-block' }}
              >
                {char}
              </motion.span>
            ))}
          </h1>
          
        </TextContainer>
        
        <ImageContainer>
          <motion.img 
          initial={{ y: 0 }} // Initial position
          animate={{ y: [0, 50, 0] }} // Animate from y=0 to y=50 and back to y=0
          transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }} src="src/assets/—Pngtree—aerospace astronaut cartoon illustration_4524462.png"></motion.img>
        </ImageContainer>
      </Container>
     
    </>
    );
}

export default Intro;