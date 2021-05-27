import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.main`
  display: flex;
  min-height: 800px;

  height: max-content;
  width: 100%;
  margin: 0 auto;

  padding: 10px;

  background-color: var(--white);

  > div {
    display: flex;
    flex-direction: column;

    width: 90%;

    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  }
`;

export const HeroImg = styled.img`
  color: var(--blue);
  width: 100%;
  max-width: 400px;
  padding: 10px;

  align-self: flex-start;

  font-size: 30px;
  letter-spacing: 1px;

  margin-bottom: 40px;

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
  padding-top: 20px;

  font-size: 30px;
  letter-spacing: 1px;
`;
