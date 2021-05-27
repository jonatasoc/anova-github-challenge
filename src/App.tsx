import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './components/Layout';
import { RepositoriesProvider } from './context/RepositoriesContext';
import { GlobalStyle } from './styles/global';

const App: React.FC = () => {
  return (
    <RepositoriesProvider>
      <Router>
        <GlobalStyle />
        <Layout />
      </Router>
    </RepositoriesProvider>
  );
};

export default App;
