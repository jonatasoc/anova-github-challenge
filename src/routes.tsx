import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import RepositoryDetails from './pages/RepositoryDetails';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/repository/:fullName+" component={RepositoryDetails} />
    </Switch>
  );
};

export default Routes;
