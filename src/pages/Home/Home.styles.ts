import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  background-color: var(--white);

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  > div {
    height: 100vh;
    width: 100%;

    max-width: 400px;
  }
`;

export const MainContent = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  background-color: var(--white);

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  > div {
    height: 100vh;
    width: 100%;

    max-width: 400px;
  }
`;

export const HeroImg = styled.img`
  color: var(--blue);
  width: 50%;
  max-width: 600px;
  padding: 10px;

  align-self: flex-start;

  font-size: 30px;
  letter-spacing: 1px;

  margin-bottom: 40px;
  margin-right: -150px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Title = styled.p`
  color: var(--white);
  background: var(--blue);
  width: 100%;
  height: 80px;
  text-align: center;
  padding: 40px;

  font-size: 30px;
  letter-spacing: 1px;
`;
