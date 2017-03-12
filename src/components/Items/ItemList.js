import React, { Component } from 'react';
import { Grid, Col, Thumbnail, ListGroup, Image } from 'react-bootstrap';
import {Link, withRouter, history } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux';
import './ItemList.css';
const POSTS_URL = 'https://api.swiftype.com/api/v1/public/engines/search.json';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      posts: null
    };
  }
  fetchData(query) {
    axios.get(POSTS_URL, {
        params: {
          "engine_key": "zYD5B5-eXtZN9_epXvoo",
          "q": query
        }
      })
      .then((response) => {
        this.setState({
          loaded: true,
          posts: response.data.records.page
        });
      })
      .catch((error) => {
        console.log('error', error);
        this.setState({
          loaded: false
        });
      });
  }
  componentWillMount() {
    this.fetchData(this.props.search);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.search !== this.props.search) {
      this.setState({loaded:false});
      this.fetchData(nextProps.search);
    }
  }
  render() {
    if (this.state.loaded && this.state.posts) {
      const list = this.state.posts.map((post, index) => {
        if (post.image) {
          return (
            <Col xs={6} md={4} key={index}>
              <Thumbnail>
                <Image src={post.image}/>
                <h4>{post.title}</h4>
              </Thumbnail>
            </Col>
          )
        } else {
          return null
        }
      });
      return (
        <ListGroup className="ItemList">
          {list} 
        </ListGroup>
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
