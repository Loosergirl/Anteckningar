import React, { Component } from 'react';
import firebase from '../firebase';

class Card extends Component {
		
  render() {
    return (
      <div className="Card">
		<div className="card" style="width: 20rem;">
  		  <img className="card-img-top" src={ this.props.src } alt={ this.props.title } />
  		  <div className="card-body">
    	    <h4 className="card-title">{ this.props.title }</h4>
    	    <p className="card-text">{ this.props.description }</p>
			<button className="btn btn-success" onClick={ this.props.rateDown }>Will live</button>
			<button className="btn btn-danger" onClick={ this.props.rateUp }>So dead</button>
  		  </div>
		</div>
      </div>
    );
  }
}

export default Card;