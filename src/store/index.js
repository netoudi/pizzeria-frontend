import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import Reactotron from '../config/ReactotronConfig';
import history from '../routes/history';
import reducers from './ducks';
import sagas from './sagas';

const middleware = [];

const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middleware.push(sagaMiddleware);
middleware.push(routerMiddleware(history));

const store = createStore(
  reducers(history),
  compose(applyMiddleware(...middleware), Reactotron.createEnhancer()),
);

sagaMiddleware.run(sagas);

export default store;
