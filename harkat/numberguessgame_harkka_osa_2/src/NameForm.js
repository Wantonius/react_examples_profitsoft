import React from 'react';

export default class NameForm extends React.Component {

	//TODO Ota GameManager decorator käyttöön!

	constructor(props) {
		super(props);
		this.state = {
			playername:""
		}
	}
	
	onChange = (event) => {
		let state = {};
		state[event.target.name] = event.target.value;
		this.setState(state);
	}
	
	onSubmit = (event) => {
		event.preventDefault();
		this.props.startGame(this.state.playername);
		this.setState({
			playername:""
		})
	}
	
	render() {
		return(
			<form onSubmit={this.onSubmit}>
				<label htmlFor="playername">Player name</label>
				<input type="text"
						name="playername"
						onChange={this.onChange}
						value={this.state.playername}/>
				<br/>
				<input type="submit" value="Enter name"/>
			</form>
		)
	}

}