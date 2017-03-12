// ./src/components/book/BookPage.js
import React from 'react';
import { connect } from 'react-redux';
import * as bookActions from '../../actions/bookActions';

class SearchResults extends React.Component{
  constructor(props){
    super(props);
  }

  // submitBook(input){
  //   this.props.createBook(input);
  // }

  render(){
    let titleInput;
    return(
      <div className="App">
          <ItemList />
          <CategoryList />
      </div>
    )
  }
}

// // Maps state from store to props
// const mapStateToProps = (state, ownProps) => {
//   return {
//     // You can now say this.props.books
//     books: state.books
//   }
// };

// // Maps actions to props
// const mapDispatchToProps = (dispatch) => {
//   return {
//   // You can now say this.props.createBook
//     createBook: book => dispatch(bookActions.createBook(book))
//   }
// };

// // Use connect to put them together
// export default connect(mapStateToProps, mapDispatchToProps)(Book);