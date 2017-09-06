import React, { Component } from 'react';
import './App.css';
import Select from './components/Select.js';

class App extends Component{
	state = {
		data: [],
		error: false,
		searchTerm: '',
		genre: ''
	}

	componentDidMount() {
		this.getDataFromApi();
	}

	getDataFromApi = () => {
		fetch("https://fend-api.herokuapp.com/movies?_limit=20")
			.then(response => response.json())
			.then(data => {
				this.setState({
					data: data
				});
				console.log(this.state.data);
			})
			
			.catch(error => {
			this.setState({ error:error })
		})
	}
	
	onChange = (e) => {
		this.setState({[e.target.name] : e.target.value});
	}
	
	isGenre = (genre, index) => {
		return 
	}
    
	render(){
		
		const { searchTerm, data } = this.state; 
		
		
		const list = data.map((item, index) => {
      if(searchTerm){
        return item.title.includes(searchTerm) ? <div key={index}>{item.title} </div> : ''
      }else{
        return <div key={index}>{item.name} </div>
      }
    });
		
		const list2 = data.filter((isGenre) => {
		
	  });
		
		
        return(
            <ul>
				{ list }
				<input type="text" name="searchTerm" onChange={this.onChange} value={this.state.searchTerm} />
				<Select name="genre" value={ this.state.genre } onChange={ this.onChange } />
            </ul>
        );
    }
}

export default App;