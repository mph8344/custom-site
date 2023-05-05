import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { TransitionGroup } from 'react-transition-group';

// const Home = lazy(() => import('../pages/Home/Home'));

const NotFound = lazy(() => import('../pages/NotFound'));

const Countdown = lazy(() => import('../pages/Countdown'));
const Soundboard = lazy(() => import('../pages/Soundboard'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <div> </div>,
  },
  {
    path: '/soundboard',
    element: <Soundboard />,
  },
  {
    path: '/countdown',
    element: <Countdown />,
  },
  {
    path: '/*',
    element: <div>Not found</div>,
    // element: <NotFound />,
  },
]);

function Routes() {
  return (
    // <div className='body'>
    <></>
    // <Suspense fallback={<Spinner animation='border'></Spinner>}>
    //   <RouterProvider router={router} />
    // </Suspense>
    //   {/* <Suspense fallback={<Spinner animation='border'></Spinner>}>
    //   <Switch>
    //     <Route exact path='/'>
    //       <div>Test</div>
    //     </Route>
    //     <Route exact path='/countdown'>
    //       <Countdown />
    //     </Route>
    //     <Route exact path='/soundboard'>
    //       <Soundboard />
    //     </Route>
    //     <Route>
    //       <NotFound />
    //     </Route>
    //   </Switch>
    // </Suspense> */}
    // </div>
  );
}

export default Routes;
