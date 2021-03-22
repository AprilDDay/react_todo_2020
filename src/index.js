import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import * as serviceWorker from './serviceWorker'; //for progressive content and offline


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

//serviceWorker.unregister(); //for progressive content and offline