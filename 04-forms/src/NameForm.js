import React from 'react';

export default class NameForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			firstname:"",
			lastname:""
		}
	}
	
	onChange = (event) => {
		let state = {};
		state[event.target.name] = event.target.value;
		this.setState(state);
	}
	
	onSubmit = (event) => {
		event.preventDefault();
		let person = {
			firstname:this.state.firstname,
			lastname:this.state.lastname
		}
		this.props.setMessage(person);
	}
	
	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<label htmlFor="firstname">First name</label>
				<input type="text"
						name="firstname"
						onChange={this.onChange}
						value={this.state.firstname}/>
				<br/>
				<label htmlFor="lastname">Last name</label>
				<input type="text"
						name="lastname"
						onChange={this.onChange}
						value={this.state.lastname}/>
				<br/>
				<input type="submit" value="Hello"/>
			</form>
		)
	}
}