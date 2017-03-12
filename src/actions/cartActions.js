// ./src/actions/cartActions.js

export const processOrder = (books) => {
	// Return action
	return {
		//Unique ID
		type: 'PROCESS_ORDER',
		// Payload
		books: books
	}
};