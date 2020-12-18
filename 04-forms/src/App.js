import logo from './logo.svg';
import './App.css';
import React from 'react';
import NameForm from './NameForm';

class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			message:""
		}
	}
	
	setMessage = (person) => {
		this.setState({
			message:"Hello, "+person.firstname+" "+person.lastname
		})
	}
	
	render() {
		  return (
			<div className="App">
				<NameForm setMessage={this.setMessage}/>
				<h2>{this.state.message}</h2>
			</div>
		  );
	}
}

export default App;
