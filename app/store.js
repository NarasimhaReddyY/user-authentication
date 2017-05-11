/**
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from  'redux-saga';
import createReducer from './reducers';
import rootSaga from './sagas';

const devtools = window.devToolsExtension || (() => noop => noop);

export default function configureStore(initialState = {}, history) {
  // Create the store with middlewares
  // 1. routerMiddleware: Syncs the location/URL path to the state

  const sagaMiddleware = createSagaMiddleware.default();

  const middlewares = [
    routerMiddleware(history),
    sagaMiddleware
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
    devtools(),
  ];

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    compose(...enhancers)
  );


  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    System.import('./reducers').then((reducerModule) => {
      const createReducers = reducerModule.default;
      const nextReducers = createReducers(store.asyncReducers);

      store.replaceReducer(nextReducers);
    });
  }

  // Initialize it with no other reducers
  store.asyncReducers = {};

  sagaMiddleware.run(rootSaga);

  return store;
}
