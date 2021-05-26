import React from 'react';
import { Box } from '@material-ui/core';

import { Container, Title } from './RepositoryDetails.styles';

const RepositoryDetails: React.FC = () => {
  return (
    <Box boxShadow={1}>
      <Title>Repository Details</Title>
      <Container>
        <p>adfadfadf</p>
      </Container>
    </Box>
  );
};

export default RepositoryDetails;
