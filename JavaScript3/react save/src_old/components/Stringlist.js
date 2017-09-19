import React from 'react';
import PropTypes from 'prop-types';

function StringList(props){
  const list = props.data
    .map((item,index) => { <li key={index}> {item} </li>
		 })

  if(props.isVisible){
      return(
        <div>
          { list }
        </div>
      )
   }else{
     return null;
   }
}

StringList.propTypes = {
	data: PropTypes.array,
	isVisible: PropTypes.bool
}

StringList.defaultProps = {
  isVisible: true
}

export default StringList;