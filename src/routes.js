import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Application from './components/Application';
import * as pages from './pages/index';

const {
  Entries,
  Guestbook
} = pages;

export default (
  <Route path="/" component={Application}>
    <IndexRoute component={Guestbook} />
    
    <Route path="entries" component={Entries} />
    
  </Route>
);
