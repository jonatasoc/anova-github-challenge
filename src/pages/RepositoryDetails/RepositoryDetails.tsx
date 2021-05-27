/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { MdPageview, MdStar } from 'react-icons/md';

import { useParams } from 'react-router-dom';

import {
  Container,
  Title,
  RepositoryContent,
  RepositoryInfo,
  RepositoryOwnerAvatar,
  RepositoryInfoText,
  RepositoryName,
  RepositoryOwnerName,
  RepositoryDescription,
} from './RepositoryDetails.styles';
import api from '../../services/api';

interface Repository {
  name: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

const RepositoryDetails: React.FC = () => {
  const { fullName } = useParams<{ fullName: string }>();
  const [repository, setRepository] = useState<Repository>();
  const classes = useStyles();

  useEffect(() => {
    const fetchRepoData = async () => {
      const response = await api.get(`/repos/${fullName}`);

      setRepository(response.data);
    };

    fetchRepoData();
  }, [fullName]);

  return (
    <Container>
      {repository && (
        <>
          <Title>{repository.name}</Title>
          <RepositoryContent>
            <RepositoryInfo>
              <RepositoryOwnerAvatar
                src={repository.owner.avatar_url}
                alt={repository.full_name}
              />
              <RepositoryInfoText>
                <RepositoryOwnerName>
                  {repository.owner.login}
                </RepositoryOwnerName>
                <RepositoryDescription>
                  {repository.description}
                </RepositoryDescription>
              </RepositoryInfoText>
              <CardActions>
                <MdStar size={25} />
                {`    ${repository.stargazers_count}`}
                <MdPageview size={25} />
                {`    ${repository.stargazers_count}`}
              </CardActions>
            </RepositoryInfo>
          </RepositoryContent>
        </>
      )}
    </Container>
  );
};

export default RepositoryDetails;
