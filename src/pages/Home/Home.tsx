import React from 'react';

import { Container, HeroImg, Title, MainContent } from './Home.styles';

import heroImg from '../../assets/images/undraw_searching_p5ux.svg';
import SearchBar from '../../components/SearchBar';

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Github Explorer</Title>
      <MainContent>
        <SearchBar />
        <HeroImg src={heroImg} />
      </MainContent>
    </Container>
  );
};

export default Home;
