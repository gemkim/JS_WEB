import React from 'react';
import ReactDOM from 'react-dom/client';

import UserDataContext from 'context/store';
import { RouterProvider } from 'react-router-dom';
import router from 'route';
//css
import 'index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserDataContext>
      <RouterProvider router={router} basename={process.env.PUBLIC_URL}>
      </RouterProvider>
    </UserDataContext>
  </React.StrictMode>
);
