import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import history from './history';

import Dashboard from '../pages/dashboard';
import SignIn from '../pages/signin';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/signin" component={SignIn} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
