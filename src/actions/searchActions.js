// ./src/actions/bookActions.js
export const searchTerm = (search) => {
  // Return action
  return {
    // Unique identifier
    type: 'SEARCH_TERM',
    // Payload
    search: search
  }
};