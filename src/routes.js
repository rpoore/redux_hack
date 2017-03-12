// ./src/routes.js
import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import SearchResults from './components/Search/SearchResults';
import App from './components/App';
import Container from './components/Container';

export default (
  <Route path="/" component={Container}>
    <IndexRoute component={App}></IndexRoute>
    <Route path="/search/:name" component={SearchResults} />
  </Route>
);