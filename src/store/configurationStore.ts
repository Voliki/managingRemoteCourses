import createBrowserHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import createReducer from './rootReducer';
import { initialState } from './initialState';

export const history: any = createBrowserHistory();
const middleware: any = routerMiddleware(history);
export const store: any = createStore(
  createReducer({}),
  initialState,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      middleware
    )
  )
);