import React from 'react';

export default class HotelForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name:"",
			address:"",
			city:"",
			country:"",
			comment:""
		}
	}
	
	onChange = (event) => {
		let state = {};
		state[event.target.name] = event.target.value;
		this.setState(state);
	}
	
	onSubmit = (event) => {
		//TODO: Create submit function
	}
	
	render() {
		return(
			<form onSubmit={this.onSubmit}>
				//TODO: Create suitable form for the state
			</form>
		)
	}
}