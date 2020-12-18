import React from 'react';
import StateManager from '../statemanager/StateManager';

class LoginPage extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			username:"",
			password:""
		}
	}
	
	onChange = (event) => {
		let state = {};
		state[event.target.name] = event.target.value;
		this.setState(state);
	}
	
	onSubmit = (event) => {
		event.preventDefault();
		this.props.login();
	}
	
	render() {
		return(
			<form onSubmit={this.onSubmit}>
				<label htmlFor="username">Username:</label>
				<input type="text"
						name="username"
						onChange={this.onChange}
						value={this.state.username}/>
				<br/>
				<label htmlFor="password">Password:</label>
				<input type="password"
						name="password"
						onChange={this.onChange}
						value={this.state.password}/>
				<br/>
				<input type="submit" value="Login"/>
			</form>
		)
	}
}

export default StateManager(LoginPage);