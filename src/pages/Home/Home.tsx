/* eslint-disable camelcase */
import React, { useCallback, useState } from 'react';

import SearchBar from '../../components/SearchBar';
import SearchResults from '../../components/SearchResults';
import api from '../../services/api';

import { Container } from './Home.styles';

interface RepositoryData {
  id: string;
  name: string;
  full_name: string;
  owner: { avatar_url: string; login: string };
  description: string;
}

const Home: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<RepositoryData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

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
    [query],
  );

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <SearchBar query={query} setQuery={setQuery} isLoading={isLoading} />
        {results.length > 0 ? (
          <SearchResults
            results={results}
            totalCount={totalCount}
            query={query}
            setResults={setResults}
          />
        ) : (
          <p style={{ textAlign: 'center' }}>No Repositories to show</p>
        )}
      </form>
    </Container>
  );
};

export default Home;
