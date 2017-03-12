// ./src/components/book/CartPage.js
import React from 'react';
import { connect } from 'react-redux';
import * as cartActions from '../../actions/cartActions';

class Cart extends React.Component {
	constructor(props){
    	super(props);
  	}

  	submitOrder(books) {
  		this.props.processOrder(books);
  	}

  	render() {
  		let books;
  		return(
  			<div>
  			<h3>Cart</h3>
  			</div>
  		)
  	}
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    books: state.books
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
    processOrder: books => dispatch(cartActions.processOrder(books))
  }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Cart);