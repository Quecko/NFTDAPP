import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.scss';
import App from './app';
import store from './redux/store/index';
import { Provider } from 'react-redux';
import { Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from './utils/web3React'

ReactDOM.render(
  <Provider store={store}>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </Provider>,
  document.getElementById('root')
);



