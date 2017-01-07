//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store/configureStore'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import routes from './routes'

ReactDOM.render(
  <Provider store={store}>
   <Router routes={routes} history={hashHistory} />
  </Provider>,
  document.getElementById('root')
);
