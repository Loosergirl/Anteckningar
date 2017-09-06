import React, { Component } from 'react';

class Card extends Component {
	
	render() {
		function rating(ratings) {
		let sum = 0;
		let amount = 0;
			
		for (var i = 0; i < ratings.length; i++) {
    		sum = sum + ratings[i];
			amount = amount + 1;
		}
			
		return Math.round(sum / amount);
	}
		
        return(
			<div>
				<p>{ this.props.title }</p>
				<p>{ rating(this.props.grade) }</p>
				<img src={ this.props.poster } alt=""/>
			</div>
        );
    }
}

export default Card;
