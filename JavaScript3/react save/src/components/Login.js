import React, { Component } from 'react';
import Confirmation from './Confirmation.js';

class Login extends Component {
    state = {
        email: "",
        password: "",
        user: "",
        message: ""
    };

    componentDidMount() {
        firebase.auth()
            .onAuthStateChanged((user) => {
                if (user) {
                    this.setState({
                        user: user
                    });
                } else {
                    this.setState({
                        user: ''
                    })
                }
            })
    }

    onSubmit = e => {
        e.preventDefault();
        firebase.auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(user => this.setState({ message: "Created new user"}))
            .catch(error => this.setState({ message: error}))
    };

    signIn = () => {
        firebase.auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch(error => this.setState({ message: error}));
    }

    signOut = () => {
        firebase.auth().signOut();
    }

    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });

    render() {
        return ( 
            <div>
            <form className="less-padding" onSubmit = { this.onSubmit }>
            <div className = "form-group">
                
            <label htmlFor = "email" > Email < /label> 
            <input type = "email"
              name = "email"
              id = "email"
              className = "form-control"
              placeholder = "name@example.com"
              value = {
                  this.state.email
              }
              onChange = {
                  this.onChange
              }
            />

            <label htmlFor = "password" > Password < /label> 
            <input type = "password"
              name = "password"
              className = "form-control"
              id = "password"
              placeholder = "Password"
            />

            </div> 
            
            <input type = "submit"
              value = "Register"
              className = "btn btn-success" / >
            
            </form>

            {
                !this.state.user && < button className = "btn btn-primary"
                onClick = {
                    this.signIn
                } > Login </button>
            } {
                this.state.user && < button className = "btn btn-primary"
                onClick = {
                    this.signOut
                } > Sign Out < /button> 
            } 
            
            <Confirmation text={ this.state.message } />
            
            </div>
        );
    }
}

export default Login;
