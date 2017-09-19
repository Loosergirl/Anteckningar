import React, {
	Component
} from 'react';
import firebase from './firebase';
import './App.css';
import Login from './components/Login.js';
import Content from './components/Content.js';

class App extends Component {
  
  state = {
    email: "",
    password: "",
    user: "",
	dinosaurs: ""
  };

  componentDidMount(){
    firebase.auth()
      .onAuthStateChanged((user) =>{
        if(user){
          
          this.setState({ user: user });
        }else{
          this.setState({ user: ''})
        }
      })
  }
  
  onSubmit = e => {
    e.preventDefault();
    firebase.auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => console.log("Created user"))
      .catch(error => console.log(error))
  };

  signIn = () => {
    firebase.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => console.log(error));
  }

  signOut = () => {
    firebase.auth().signOut();
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <header>
          <h1>Hello! { this.state.user && this.state.user.email }</h1>
        </header>
		
        <Login onSubmit={this.onSubmit} 
		  email={this.state.email} 
		  onChange={this.onChange} 
		  password={this.state.password} 
		  user={this.state.user} 
		  signIn={this.signIn} 
		  signOut={this.signOut}/>
		
		<Content />
      </div>
    );
  }
}
export default App;