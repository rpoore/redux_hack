import React, { Component } from 'react';
import { Grid, Col, Thumbnail } from 'react-bootstrap';
import {Link, withRouter, history } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux';
import './components/Items/ItemList.css';

const POSTS_URL = 'https://public-api.wordpress.com/rest/v1.1/sites/techcrunch.com/posts?number=20';


class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      posts: null
    };
  }
  componentWillMount() {
    axios.get(POSTS_URL)
      .then((response) => {
        this.setState({
          loaded: true,
          posts: response.data.posts
        });
      })
      .catch((error) => {
        console.log('error', error);
        this.setState({
          loaded: false
        });
      });
  }
  render() {
    if (this.state.loaded) {
      console.log(this.state)
      const list = this.state.posts.map((post, index) => {
        if (post.post_thumbnail) {
          return <Col sm={6} md={4}>
          <Thumbnail key={index} src={post.post_thumbnail.URL} alt="242x200">
          <div className="Contain"><Link to="/article/{post.title}">{post.title}</Link></div>
          </Thumbnail>
          </Col>
        } else {
          return null
        }
      });
      return (
        <Grid fluid className="ItemList" >
          {list} 
        </Grid>
      );
    } else {
      return (
        <div>Loading ...</div>
      );
    }
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
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
