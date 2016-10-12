import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <header className="nav navbar-default">
        <h1>
          Twitter Api
          <img width="100" src="./images/twitter.png" alt="Logo" />
        </h1>
      </header>
    )
  }
}
export default Header;
