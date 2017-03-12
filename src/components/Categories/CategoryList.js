// ./src/components/book/CartPage.js
import React from 'react';
import { connect } from 'react-redux';
import * as cartActions from '../../actions/cartActions';
import './components/Categories/CategoryList.css';

class CategoryList extends React.Component {
	constructor(props){
    	super(props);
  	}

  	// submitOrder(books) {
  	// 	this.props.processOrder(books);
  	// }

  	render() {
      const categories = ['Cat1', 'Cat2', 'Cat3', 'Cat4', 'Cat5'];
      const list = categories.map((category) =>
        <Category name={category} />
      );
      return (
        <ul className="CategoryList">
          {list}
        </ul>
      );
  	}
}

class Category extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <li className="Category">
        <span>
          {this.props.name}
        </span>
      </li>
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
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);