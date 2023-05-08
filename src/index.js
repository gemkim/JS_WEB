import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import UserDataContext from './context/store';

import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserDataContext>
        <App />
      </UserDataContext>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
