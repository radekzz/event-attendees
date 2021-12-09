import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Uncomment the line below to include the styling
import './index.css';

import { Provider } from 'react-redux';
import store from './redux/store/store';
import FirebaseInitAuth from './firebase/firebaseInitAuth'

FirebaseInitAuth();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
