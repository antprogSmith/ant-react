import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AntMenu from '@ant-menu/ant-menu';
import {AntChart} from './Chart';

ReactDOM.render(
  <React.StrictMode>
    <ant-menu></ant-menu>
    <AntChart></AntChart>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
