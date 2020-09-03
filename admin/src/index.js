import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { ConnectedRouter } from 'connected-react-router';
// import * as serviceWorker from './serviceWorker';
// import history from './utils/history';
import App from './components/App/index';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root')
);

// serviceWorker.unregister();


