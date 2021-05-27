/* eslint-disable camelcase */
import React, { createContext, useCallback, useContext, useState } from 'react';

interface RepositoryData {
  id: string;
  name: string;
  full_name: string;
  owner: { avatar_url: string; login: string };
  description: string;
}

interface RepositoriesContextData {
  results: RepositoryData[];
  resetRepositories(): void;
  setResults: (repositoryData: RepositoryData[]) => void;
}

const RepositoriesContext = createContext<RepositoriesContextData>(
  {} as RepositoriesContextData,
);

const RepositoriesProvider: React.FC = ({ children }) => {
  const [results, setResults] = useState<RepositoryData[]>(() => {
    const repositories: RepositoryData[] = JSON.parse(
      localStorage.getItem('@RepositoriesExplorer: repositories') || '[]',
    );

    if (!repositories) return [];

    return repositories;
  });

  const resetRepositories = useCallback(() => {
    localStorage.removeItem('@RepositoriesExplorer: repositories');

    setResults([]);
  }, []);

  return (
    <RepositoriesContext.Provider
      value={{
        results,
        setResults,
        resetRepositories,
      }}
    >
      {children}
    </RepositoriesContext.Provider>
  );
};

function useRepositoriesContext(): RepositoriesContextData {
  const context = useContext(RepositoriesContext);

  if (!context) {
    throw new Error(
      'useRepositoriesContext must be used within an RepositoriesProvider',
    );
  }

  return context;
}

export { useRepositoriesContext, RepositoriesProvider };
