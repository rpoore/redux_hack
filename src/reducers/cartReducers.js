// ./src/reducers/cartReducers.js
export default (state =[], action) => {
	switch(action.type){
		// Check if action dispatched is
    	// PROCESS_ORDER and act on that
    	case 'PROCESS_ORDER':
    		return [
    			...state,
    			Object.assign({}, action.books)
    		]
    	default:
        	return state;
	}
}