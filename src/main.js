import React from 'https://esm.sh/react@18.3.1?dev';
import ReactDOM from 'https://esm.sh/react-dom@18.3.1/client?dev';
import { HashRouter } from 'https://esm.sh/react-router-dom@6.22.3?dev&deps=react@18.3.1,react-dom@18.3.1';
import App from './App.js';

const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl);

root.render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(
      HashRouter,
      null,
      React.createElement(App)
    )
  )
);
