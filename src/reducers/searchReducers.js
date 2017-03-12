// ./src/reducers/bookReducers.js
export default (state = {}, action) => {
  console.log(action);
  switch (action.type){
    // Check if action dispatched is
    // SEARCH_TERM and act on that
    case 'SEARCH_TERM':
        return action.search;
    default:
        return state;
  }
};