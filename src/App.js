import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Routes from './routes';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Fragment>
);

export default App;
