/* eslint-disable camelcase */
import React, { useCallback, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useRepositoriesContext } from '../../context/RepositoriesContext';
import api from '../../services/api';
import { LoadingIcon } from '../Loading/Loading.styles';

import RepositoryCard from '../RepositoryCard';

import { Container } from './SearchResults.styles';

interface SearchResultsProps {
  query: string;
  totalCount: number;
}

const SearchResults: React.FC<SearchResultsProps> = ({ totalCount, query }) => {
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);
  const { results, setResults } = useRepositoriesContext();

  const handleNext = useCallback(async () => {
    if (results.length === totalCount) {
      setHasMore(false);
      return;
    }

    const response = await api.get(`/search/repositories`, {
      params: {
        q: encodeURIComponent(query),
        sort: 'stars',
        order: 'desc',
        per_page: 15,
        page: page + 1,
      },
    });

    const newResults = response.data.items;

    setResults([...results, ...newResults]);

    setPage(page + 1);
  }, [page, query, results, setResults, totalCount]);

  return (
    <Container>
      <InfiniteScroll
        dataLength={results.length}
        next={handleNext}
        hasMore={hasMore}
        loader={
          <div>
            <LoadingIcon /> Loading news Repositories...
          </div>
        }
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>No more Repositories to show</b>
          </p>
        }
      >
        {results.map(repository => (
          <RepositoryCard key={repository.id} repository={repository} />
        ))}

        {results.length < 16 && (
          <p style={{ textAlign: 'center' }}>
            <b>No more Repositories to show</b>
          </p>
        )}
      </InfiniteScroll>
    </Container>
  );
};

export default SearchResults;
