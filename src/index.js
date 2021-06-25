import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Router';
import { Provider } from 'react-redux';
import { store } from './state/index';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
