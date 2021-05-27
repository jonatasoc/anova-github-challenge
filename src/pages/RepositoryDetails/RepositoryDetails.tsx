/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import { MdAddAlert, MdArrowBack, MdCallSplit, MdStar } from 'react-icons/md';
import Divider from '@material-ui/core/Divider';

import { useHistory, useParams } from 'react-router-dom';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import {
  Container,
  Title,
  RepositoryContent,
  RepositoryInfo,
  RepositoryOwnerAvatar,
  RepositoryInfoText,
  RepositoryOwnerName,
  RepositoryDescription,
  BackIcon,
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

const MySwal = withReactContent(Swal);

const Toast = MySwal.mixin({
  toast: true,
  position: 'top-right',
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast',
  },
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true,
});

const RepositoryDetails: React.FC = () => {
  const { fullName } = useParams<{ fullName: string }>();
  const [repository, setRepository] = useState<Repository>();
  const history = useHistory();

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await api.get(`/repos/${fullName}`);

        setRepository(response.data);
      } catch (err) {
        await Toast.fire({
          icon: 'error',
          title: `<span style="color: white">${err}<span> `,
          background: '#e83f5b',
          iconColor: 'white',
          timer: 4000,
        });
      }
    };

    fetchRepoData();
  }, [fullName]);

  return (
    <Container elevation={2}>
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
            </RepositoryInfo>
            <Divider />
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <MdStar size={25} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={`${repository.stargazers_count} stars`}
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <MdCallSplit />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={`${repository.forks_count} forks`} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <MdAddAlert />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={`${repository.open_issues_count} issues`}
                />
              </ListItem>
            </List>
          </RepositoryContent>
          <BackIcon onClick={() => history.push('/')}>
            <MdArrowBack size={30} />
          </BackIcon>
        </>
      )}
    </Container>
  );
};

export default RepositoryDetails;
