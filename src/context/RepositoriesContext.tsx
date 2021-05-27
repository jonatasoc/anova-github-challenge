/* eslint-disable camelcase */
import React, { createContext, useContext, useState } from 'react';

interface RepositoryData {
  id: string;
  name: string;
  full_name: string;
  owner: { avatar_url: string; login: string };
  description: string;
}

interface RepositoriesContextData {
  results: RepositoryData[];
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

  return (
    <RepositoriesContext.Provider
      value={{
        results,
        setResults,
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
