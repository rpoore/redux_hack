// ./src/components/App.js
import React  from 'react';
import { browserHistory, Link} from 'react-router';
import { connect, dispatch } from 'react-redux';
import { Button, FormGroup, InputGroup, FormControl } from 'react-bootstrap';
import * as searchActions from '../actions/searchActions';

import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: ''};
    this.handleChangeText = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({search: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.searchTerm(this.state.search);
    browserHistory.push('/search/' + this.state.search);
  }
  render() {
  return (
    <div className="App">
        <p className="App-intro">
          <div className="Search">
            <form className="search" action='/search' onSubmit={this.handleSubmit}>
              <FormGroup className="input-search">
                <FormControl type="text" value={this.state.search} placeholder="Search for news.." onChange={this.handleChangeText} />
              </FormGroup>
              <FormGroup>
                <Button type="submit" value="Submit">
                  Search
                </Button>
              </FormGroup>
            </form>
          </div>
        </p>
        {this.props.children}
      </div>
    )
  } 
}


// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    search: state.search
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    searchTerm: search => dispatch(searchActions.searchTerm(search))
  }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(App); 
