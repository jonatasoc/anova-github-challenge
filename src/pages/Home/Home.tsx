/* eslint-disable camelcase */
import React, { useCallback, useState } from 'react';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import SearchBar from '../../components/SearchBar';
import SearchResults from '../../components/SearchResults';
import { useRepositoriesContext } from '../../context/RepositoriesContext';
import api from '../../services/api';

import { Container } from './Home.styles';

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

      try {
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
      } catch (err) {
        await Toast.fire({
          icon: 'error',
          title: `<span style="color: white">${err}<span> `,
          background: '#e83f5b',
          iconColor: 'white',
          timer: 4000,
        });
      } finally {
        setIsLoading(false);
      }
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
