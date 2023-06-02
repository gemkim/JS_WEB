import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFound from 'pages/NotFound';
import Home from 'pages/Home';
import Login from 'pages/Login';
import JoinUs from 'pages/JoinUs';
import OrderSheet from 'pages/OrderSheet';


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
      },
      {
        path: 'join-us',
        element: <JoinUs />,
      },
      {
        path: 'order-sheet',
        element: <OrderSheet />,
      },
    ],
  },
]);

export default router;
