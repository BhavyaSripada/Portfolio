
import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 10px;
  margin-left:120px;
  margin-right:20px;
  font-family:'Source Code Pro',sans-serif;
  color:white;
`;

const cards = [
  { title: 'E-Commerce application for buying and selling pre owned books', content: 'Built using React.js and Material UI.Data Management is handled via Hygraph CMS and GraphQL.Authentication has been done using Firebase.Utilized PostgreSQL(hosted on Supabase) to handle user sales history.Integrated with Stripe Checkout.',url:"https://enbook2.vercel.app"},
  { title: 'Real Time Emotion Analysis and Chart Generation', content: <p>Developed a React application for real-time mood analysis using OpenCV and FER.React app for real-time mood analysis using OpenCV and FER. It streams a live webcam feed, and the backend (Flask and Socket.io) processes it to display a chart of the person's emotions.</p>,url:"https://github.com/BhavyaSripada/EmotionTrackingApp" },
  { title: 'Extra Curricular Activities App', content: 'Developed a React Native Application to connect instructors and students.Instructors can register their classes and students may enroll in their classes.Data Management is handled via Hygraph CMS and GraphQL.Authentication has been done using Firebase.',url:"https://github.com/BhavyaSripada/slottzz2" },
  { title: 'Face Detection App', content: 'Developed a Face Detection Application using React.js and TensorFlow.js utilizing the 486 3D Facial Landmarks Model as part of my internship at CodeClause',url:"https://identifyio.netlify.app/" },
  { title: 'Image Background Remover', content: 'Developed an Image Background Remover in React utilizing Remove.Bg API,as part of my internship at CodeClause',url:"https://image-background-remover-nl32.vercel.app/" },
  { title: 'Sentence Similarity Checker', content: 'Built a sentence similarity checker using sentence transfomers.This is a work in progress as I plan to integrate this application further with React and PostgreSQL.Please come back soon! :)',url:"https://github.com/BhavyaSripada/SimilarityChecker" },
];

const CardGrid = () => {
  return (
    <GridContainer>
      {cards.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} url={card.url}/>
      ))}
    </GridContainer>
  );
};

export default CardGrid;
