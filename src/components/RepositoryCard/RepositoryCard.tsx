/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';

import {
  Container,
  RepositoryInfo,
  RepositoryOwnerAvatar,
  RepositoryInfoText,
  RepositoryName,
  RepositoryOwnerName,
  RepositoryDescription,
} from './RepositoryCard.styles';

interface RepositoryData {
  id: string;
  name: string;
  full_name: string;
  owner: { avatar_url: string; login: string };
  description: string;
}

interface RepositoryProps {
  repository: RepositoryData;
}

const RepositoryCard: React.FC<RepositoryProps> = ({ repository }) => {
  return (
    <div>
      <Link to={`/repository/${repository.full_name}`}>
        <Container>
          <RepositoryInfo>
            <RepositoryOwnerAvatar
              src={repository.owner.avatar_url}
              alt={repository.full_name}
            />
            <RepositoryInfoText>
              <RepositoryName>{repository.name}</RepositoryName>
              <RepositoryOwnerName>
                {repository.owner.login}
              </RepositoryOwnerName>
              <RepositoryDescription>
                {repository.description}
              </RepositoryDescription>
            </RepositoryInfoText>
          </RepositoryInfo>
          <MdArrowForward size={20} />
        </Container>
      </Link>
    </div>
  );
};

export default RepositoryCard;
