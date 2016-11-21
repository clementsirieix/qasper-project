// @flow
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './layout/App';
import Home from './layout/Home';
import Dashboard from './layout/Dashboard';

const router = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="/profile" component={Dashboard}></Route>
    </Route>
  </Router>
);

export default router
