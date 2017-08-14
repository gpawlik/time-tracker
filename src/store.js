import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'remote-redux-devtools';

import { state } from './root-reducer';
import sagas from './root-saga';
import initialState from './root-state';

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeWithDevTools(
  applyMiddleware(sagaMiddleware)
);

const store = createStore(
  state,
  initialState,
  enhancer
);

sagaMiddleware.run(sagas);

export default store;
