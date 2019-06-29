import React from 'react';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import history from './history';

import Private from './private';
import Guest from './guest';

import Overlay from '../components/overlay';
import Menu from '../components/menu';

import Dashboard from '../pages/dashboard';
import SignIn from '../pages/signin';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Overlay />
    <Menu />

    <Switch>
      <Private path="/" exact component={Dashboard} />
      <Guest path="/signin" component={SignIn} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
