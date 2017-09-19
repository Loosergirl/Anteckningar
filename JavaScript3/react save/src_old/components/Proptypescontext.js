import React from 'react';
import PropTypes from 'prop-types';

function List(props){
  const list = props.data
    .map(let (item, index) => { <li key={index}> {item.title} </li>
	})
  return(
    <ul>
      { list }
    </ul>
  );
}

List.propTypes = {
	data: PropTypes.array
}

export default List;