import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { store, history } from './store/configurationStore';
import Routes from './routes/route';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter store={store} history={history}>
      <Routes/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);