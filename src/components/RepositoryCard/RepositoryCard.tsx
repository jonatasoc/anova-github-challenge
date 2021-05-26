/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  RepositoryOwnerAvatar,
  RepositoryName,
  RepositoryDescription,
} from './RepositoryCard.styles';

interface RepositoryProps {
  repository: {
    id: string;
    full_name: string;
    owner: { avatar_url: string };
    description: string;
  };
}

const RepositoryCard: React.FC<RepositoryProps> = ({ repository }) => {
  return (
    <Container>
      <Link to={`/repository/${repository.id}`}>
        <div>
          <RepositoryOwnerAvatar
            src={repository.owner.avatar_url}
            alt={repository.full_name}
          />
          <RepositoryName>{repository.full_name}</RepositoryName>
          <RepositoryDescription>
            {repository.description}
          </RepositoryDescription>
        </div>
      </Link>
    </Container>
  );
};

export default RepositoryCard;
