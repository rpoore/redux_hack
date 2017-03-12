// ./src/reducers/index.js
import { combineReducers } from 'redux';
import books from './bookReducers';
import cart from './cartReducers';
import search from './searchReducers';

export default combineReducers({
  books: books,
  search: search,
  // More reducers if there are
  // can go here
});