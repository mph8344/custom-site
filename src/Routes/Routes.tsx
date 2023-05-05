import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { TransitionGroup } from 'react-transition-group';

const Home = lazy(() => import('../pages/Home/Home'));

const NotFound = lazy(() => import('../pages/NotFound'));

const Countdown = lazy(() => import('../pages/Countdown'));
const Soundboard = lazy(() => import('../pages/Soundboard'));

function Routes() {
  return (
    // <div className='body'>
    <Suspense fallback={<Spinner animation='border'></Spinner>}>
      <Switch>
        <Route exact path='/'>
          <div>Test</div>
          {/* <Home /> */}
        </Route>
        <Route exact path='/countdown'>
          <Countdown />
        </Route>
        <Route exact path='/soundboard'>
          <Soundboard />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
    // </div>
  );
}

export default Routes;
