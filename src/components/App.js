// ./src/components/App.js
import React  from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { Button, FormGroup, InputGroup, FormControl } from 'react-bootstrap';

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
    browserHistory.push('/search/' + this.state.search);
  }
  render() {
  return (
    <div className="App">
        <p className="App-intro">
          <div className="Search">
            <form className="search" action='/search' onSubmit={this.handleSubmit}>
              <FormGroup className="input-search">
                <FormControl type="text" value={this.state.search} placeholder="Milk.." onChange={this.handleChangeText} />
              </FormGroup>
              <FormGroup>
                <Button type="submit" value="Submit">
                  Search
                </Button>
              </FormGroup>
            </form>
          </div>
        </p>
        <Link to="/">Go to Home</Link>
        {this.props.children}
      </div>
    )
  } 
}

export default App

