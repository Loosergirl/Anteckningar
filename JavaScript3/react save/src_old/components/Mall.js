import React, { Component } from 'react';

class Mall extends Component{
    render(){
		
		let list = this.props.data.map((item, index) => {
			return <li key={index}>
					<Button onClick={ this.props.addToCart }></Button>
				</li>;
		});

        return(
			<ul>
				{ list }
			</ul>
        );
    }
}


export default Mall;