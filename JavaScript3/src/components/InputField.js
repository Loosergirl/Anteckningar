import React, { Component } from 'react';
//import logo from './logo.svg';
import Header from './Header.js';
import Paragraph from './Paragraph.js';
import Button from './Button.js';

class InputField extends Component{
	buttonClick = () => {
        console.log('Hej');
    }
	
	reverse = (str) => {
		return str.split('').reverse().join('');
	}
	
	removeZ = (str) => {
		str = str.split('z').join("");
		str = str.split('Z').join("");
		return str;
	}
    
	render(){
        return(
            <div>
				<Header isVisible={ true } name="Maria"/>
                <Button onClick={ this.buttonClick }> <Paragraph /> </Button>
			
			<div>
			<input type="text" value={ this.props.input } onChange={ this.props.onChange } />
			</div>
			
				<h3>{ this.props.input }</h3>
				<h3>{ this.reverse(this.props.input) }</h3>
				<h3>{ this.removeZ(this.props.input) }</h3>

            </div>
        );
    }
}

export default InputField;