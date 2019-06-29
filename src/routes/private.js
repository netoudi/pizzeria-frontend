import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { MenuTypes } from '../store/ducks/menu';

import store from '../store';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!store.getState().auth.signedIn) {
        return (
          <Redirect to={{
            pathname: '/signin',
            state: { from: props.location },
          }}
          />
        );
      }

      if (!store.getState().menu.visible) {
        store.dispatch({ type: MenuTypes.SHOW });
      }

      return <Component {...props} />;
    }}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
