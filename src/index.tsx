import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import './local/i18n';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);
