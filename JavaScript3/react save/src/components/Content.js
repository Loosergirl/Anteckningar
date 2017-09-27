import React, { Component } from 'react';
import firebase from '../firebase';
import Card from './Card.js';

class Content extends Component {
	
state = {
	dinosaurs: ""
}

componentDidMount(){
	firebase.database().ref("dinosaurs")
      .on('value', (snapshot) =>{
        this.setState({dinosaurs: snapshot.val()});
	});
}
	
getDinosaursFromDB = () => {
	firebase.database().ref("dinosaurs")
  .on('value', function(snapshot) {
    return(snapshot.val());
});
}

addDinosaurToDB = () => {
	let dinosaur = {};
	
	firebase.database()
    .ref("dinosaurs")
    .push(dinosaur)
}

removeDinosaurFromDB = (dinosaur) => {
	  firebase.database()
      .ref(`dinosaurs/${dinosaur}`).remove()
}

toArray = (firebaseObject) => {
	let array = []
	for(let item in firebaseObject){
		array.push({ key: item, value: firebaseObject[item] })
	}
	return array;
}

rateUp = (dinosaur) => {
	dinosaur.rating = dinosaur.rating + 1;
}

rateDown = (dinosaur) => {
	dinosaur.rating = dinosaur.rating - 1;
}
	
  render() {
	  const grid = this.state.dinosaurs.map(dinosaur => 
		<div key={ dinosaur.key }>
			<Card src={ dinosaur.picture } title={ dinosaur.name } description={ dinosaur.description } rateUp={ this.rateUp(dinosaur) } rateDown={ this.rateDown(dinosaur) } />
		</div>)

    return (
      <div className="Content container">
	    <div className="row">
	      <div col-sm-1 col-md-2 col-lg-3 col-xl-4>v
		    { grid }
	      </div>
	    </div>
      </div>
    );
  }
}

export default Content;
