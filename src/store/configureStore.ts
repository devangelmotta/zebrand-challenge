import { configureStore, getDefaultMiddleware, Store} from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import { MakeStore } from "next-redux-wrapper";
import { isServer } from 'utils/ssr'
import { createReducer } from './reducers';

export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];

  const makeStore: MakeStore = (): Store => {
    const store = configureStore({
      reducer: createReducer(),
      middleware: [...getDefaultMiddleware(), ...middlewares],
      devTools:isServer() && (
        process.env.NODE_ENV !== 'production' ||
        process.env.PUBLIC_URL.length > 0),
      enhancers,
    });

    return store;
  };

  

  return makeStore;
}
