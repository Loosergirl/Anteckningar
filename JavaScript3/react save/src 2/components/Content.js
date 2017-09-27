import React, { Component } from 'react';
import firebase from '../firebase';

class Content extends Component {
	
getDinosaursFromDB = () => {
	firebase.database().ref("dinosaurs")
  .on('value', function(snapshot) {
    return(snapshot.val());
});

}

  componentDidMount(){
    firebase.database().ref("dinosaurs")
      .on('value', (snapshot) =>{
        this.setState({dinosaurs: snapshot.val()});
      });
  }
	
  render() {
    return (
      <div className="Content">
		
      </div>
    );
  }
}

export default Content;
