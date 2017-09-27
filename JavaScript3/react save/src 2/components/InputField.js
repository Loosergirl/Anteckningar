import React, { Component } from 'react';
//import logo from './logo.svg';

class InputField extends Component{
	
	render(){
        return(
            <div>
				<label for={ this.props.id }>{ this.props.label }</label>
				<input type={ this.props.type } class="form-control" id={ this.props.id } placeholder={ this.props.placeholder }>
            </div>
        );
    }
}

export default InputField;