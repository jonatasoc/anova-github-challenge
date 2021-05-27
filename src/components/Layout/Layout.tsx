/* eslint-disable camelcase */
import React from 'react';

import { Container, HeroImg, Title, MainContent } from './Layout.styles';

import heroImg from '../../assets/images/undraw_searching_p5ux.svg';
import Routes from '../../routes';

const Layout: React.FC = () => {
  return (
    <Container>
      <Title>Github Repositories Explorer</Title>
      <MainContent>
        <Routes />
        <HeroImg src={heroImg} />
      </MainContent>
    </Container>
  );
};

export default Layout;
