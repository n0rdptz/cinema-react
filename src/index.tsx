import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import store from './store';
import {Provider} from 'react-redux';
import './styles/main.scss';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

import {getFilms, getSeances, getTickets} from './backend/data';

//console.log(getFilms());
console.log(getSeances());
console.log(getTickets());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);
serviceWorker.unregister();
