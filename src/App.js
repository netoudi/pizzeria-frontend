import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import GlobalStyle from './styles/global';
import Routes from './routes';
import store from './store';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
        <ReduxToastr />
      </BrowserRouter>
    </Provider>
  </Fragment>
);

export default App;
