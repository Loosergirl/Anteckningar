import React, { Component } from 'react';

class Login extends Component{
	render(){
        return(
          <div>
          <form onSubmit={this.props.onSubmit}>
            <div className="form-group">
			  <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email" id="email"
                className="form-control m-3" placeholder="name@example.com"
                value={this.props.email}
                onChange={this.props.onChange}
              />
		
			  <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="form-control m-3" id="password" placeholder="Password"
                value={this.props.password}
                onChange={this.props.onChange}
              />
		
            </div>
            <input type="submit" value="Register" className="btn btn-success m-3" />
          </form>
		
          { !this.props.user && <button className="btn btn-primary m-3" onClick={this.props.signIn}> Login </button>
		  }
          { this.props.user && <button className="btn btn-primary m-3" onClick={this.props.signOut}> Sign out </button> 
		  }
        </div>
        );
    }
}

export default Login;