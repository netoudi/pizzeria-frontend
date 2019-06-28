import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';
import Routes from './routes';
import store from './store';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  </Fragment>
);

export default App;
