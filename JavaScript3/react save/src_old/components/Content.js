import React, { Component } from 'react';
import Paragraph from './Paragraph.js';

class Content extends Component {
  render() {
    return (
      <div className="Content">
		<h1>Hej</h1>
		<p>Hungry, I am so Hungry, on my own...</p>
		<Paragraph />
		<Paragraph />
		<Paragraph />
      </div>
    );
  }
}

export default Content;
