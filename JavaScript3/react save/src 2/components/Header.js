import React, { Component } from 'react';

class Header extends Component {
  render() {
	  let title = this.props.isVisible === true ? this.props.name : "";
    return (
      <header className="Header">
		<h1> { title } </h1>
      </header>
    );
	  }
	
  }

export default Header;