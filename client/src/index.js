import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { initializeAxios } from './helpers/axiosHelper';
import store from './redux/store';
import history from './helpers/history';

import './index.css';

initializeAxios();
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
