import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFound from 'pages/NotFound';
import Home from 'pages/Home';
import Login from 'pages/Login';
import JoinUs from 'pages/JoinUs';
import ForgotAccount from 'pages/ForgotAccount';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
        ForgotAccount
      },
      {
        path: 'join-us',
        element: <JoinUs />,
      },
      {
        path: 'forgot-account',
        element: <ForgotAccount />,
      },
    ],
  },
]);

export default router;
