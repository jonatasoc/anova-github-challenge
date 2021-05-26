import styled from 'styled-components';

export const Container = styled.main`
  display: flex;

  margin: 0 auto;

  background-color: var(--white);

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Title = styled.p`
  color: var(--white);
  background: var(--blue);
  width: 100%;
  height: 120px;
  text-align: center;
  padding-top: 40px;

  font-size: 30px;
  letter-spacing: 1px;
`;
