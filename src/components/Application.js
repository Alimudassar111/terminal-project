import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


export default class Application extends Component {
  constructor(props, context) {
    super(props, context);
  }

  static propTypes = {
    location: PropTypes.object
  };

  render() {
    return (
        <div >
        <div>
          <ul className="nav nav-pills">
            <li className={this.props.location.pathname === `/` ? 'active' : ''}>
              <Link to="/">Create</Link>
            </li>

            <li className={this.props.location.pathname === `/entries` ? 'active' : ''}>
              <Link to="entries">List</Link>
            </li>
          </ul>
        </div>

        <div id="main">
          {this.props.children}
        </div>

      </div>
    );
  }
}
