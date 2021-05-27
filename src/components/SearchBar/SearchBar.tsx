import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { MdSearch } from 'react-icons/md';

import { Container, Input } from './SearchBar.styles';
import { LoadingIcon } from '../Loading/Loading.styles';

const useStyles = makeStyles(() => ({
  root: {
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: 'none',
  },
}));

interface SearchBarProps {
  query: string;
  setQuery: (value: string) => void;
  isLoading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  query,
  setQuery,
  isLoading,
}) => {
  const classes = useStyles();

  return (
    <Container>
      <Paper component="div" className={classes.root}>
        <Input
          placeholder="Search for Github repositories"
          inputProps={{ 'aria-label': 'search repositories' }}
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <Button
          type="submit"
          aria-label="search"
          variant="contained"
          color="primary"
          startIcon={isLoading ? <LoadingIcon /> : <MdSearch />}
        >
          Search
        </Button>
      </Paper>
    </Container>
  );
};

export default SearchBar;
