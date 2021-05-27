import { Paper } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled(Paper)`
  display: flex;
  flex-direction: column;
  padding: 10px;

  margin: 0 auto;

  background-color: var(--white);

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
export const RepositoryContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  color: var(--text);
  width: 100%;
  height: 80px;
  text-align: center;
  padding-top: 40px;
  margin-bottom: 40px;

  font-size: 1.5rem;
  letter-spacing: 1px;
`;

export const RepositoryInfo = styled.div`
  display: flex;
  margin-bottom: 10px;

  div:first-child {
    margin-top: 30px;
  }
`;

export const RepositoryOwnerAvatar = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
`;

export const RepositoryInfoText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RepositoryName = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  margin-left: 10px;
`;

export const RepositoryOwnerName = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-left: 10px;
`;

export const RepositoryDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-left: 10px;
`;

export const BackIcon = styled.div`
  align-self: center;
  width: 100%;

  svg {
    margin: 0 auto;
    width: 100%;
  }

  cursor: pointer;
`;
