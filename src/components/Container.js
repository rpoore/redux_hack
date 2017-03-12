// ./src/components/App.js
import React  from 'react';
import {Link} from 'react-router';

const Container = (props) => {
  return (
    <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Redux App</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/books">Book</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Each smaller components */}
      {props.children}
    </div>
  );
};

export default Container