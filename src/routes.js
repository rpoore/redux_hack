// ./src/routes.js
import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import SearchResults from './components/Search/SearchResults';
import App from './components/App';
import Book from './components/book/BookPage';
import Container from './components/Container';

export default (
  <Route path="/" component={Container}>
    <IndexRoute component={App}></IndexRoute>
    <Route path="/search/:search" component={SearchResults} />
    <Route path="/books" component={Book}></Route>
  </Route>
);