/* eslint-disable camelcase */
import React, { useCallback, useState } from 'react';

import SearchBar from '../../components/SearchBar';
import SearchResults from '../../components/SearchResults';
import { useRepositoriesContext } from '../../context/RepositoriesContext';
import api from '../../services/api';

import { Container } from './Home.styles';

const Home: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const { results, setResults } = useRepositoriesContext();

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();

      setResults([]);

      if (!query) return;

      setIsLoading(true);

      const response = await api.get(`/search/repositories`, {
        params: {
          q: encodeURIComponent(query),
          sort: 'stars',
          order: 'desc',
          per_page: 15,
        },
      });

      setTotalCount(response.data.total_count);
      setResults(response.data.items);
      setIsLoading(false);
    },
    [query, setResults],
  );

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <SearchBar query={query} setQuery={setQuery} isLoading={isLoading} />
        {results.length > 0 ? (
          <SearchResults totalCount={totalCount} query={query} />
        ) : (
          <p style={{ textAlign: 'center' }}>No Repositories to show</p>
        )}
      </form>
    </Container>
  );
};

export default Home;
