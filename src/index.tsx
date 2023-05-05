import React, { createRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Soundboard from './pages/Soundboard';
import Countdown from './pages/Countdown';
import { Grid } from './components/Grid';

export const routes = [
  {
    path: '/',
    element: <Grid />,
    nodeRef: createRef(),
  },
  {
    path: '/soundboard',
    element: <Soundboard />,
    nodeRef: createRef(),
  },
  {
    path: '/countdown',
    element: <Countdown />,
    nodeRef: createRef(),
  },
  {
    path: '/*',
    element: <NotFound />,
    nodeRef: createRef(),
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    {/* <App></App> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
