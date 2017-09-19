import React, { Component } from 'react';

class Select extends Component {
  render() {
    return (
		<select value={this.props.value}
			onChange={this.props.onChange}>
			<option value="Action">Action</option>
			<option value="Adventure">Adventure</option>
			<option value="Biography">Biography</option>
			<option value="Comedy">Comedy</option>
			<option value="Crime">Crime</option>
			<option value="Drama">Drama</option>
			<option value="Fantasy">Fantasy</option>
			<option value="History">History</option>
			<option value="Romance">Romance</option>
			<option value="Sci-Fi">Sci-Fi</option>
			<option value="Western">Western</option>
		</select>
    );
  }
}

export default Select;
