import styled from 'styled-components';
import Card from '@material-ui/core/Card';

export const Container = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 700px;
  padding: 8px;
  margin-left: 5px;
  margin-bottom: 10px;

  cursor: pointer;

  margin-top: 15px;

  &:hover {
    transform: scale(1.02);
    z-index: 10;
    transition: all 0.3s;
  }

  button {
    min-width: 40px;
  }
`;

export const RepositoryInfo = styled.div`
  display: flex;

  div:first-child {
    margin-top: 30px;
  }
`;

export const RepositoryOwnerAvatar = styled.img`
  width: 60px;
  height: auto;
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
  font-size: 0.8rem;
  font-weight: 400;
  margin-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
