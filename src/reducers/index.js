// ./src/reducers/index.js
import { combineReducers } from 'redux';
import books from './bookReducers';
import cart from './cartReducers';

export default combineReducers({
  books: books,
  // More reducers if there are
  // can go here
});