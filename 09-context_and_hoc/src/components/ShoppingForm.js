import React from 'react';
import StateManager from '../statemanager/StateManager';

class ShoppingForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			type:"",
			count:0,
			price:0
		}
	}
	
	onChange = (event) => {
		let state = {};
		state[event.target.name] = event.target.value;
		this.setState(state);
	}
	
	onSubmit = (event) => {
		event.preventDefault();
		let item = {
			type:this.state.type,
			count:this.state.count,
			price:this.state.price
		}
		this.props.addToList(item);
	}
	
	render() {
		return(
			<form onSubmit={this.onSubmit}>
				<label htmlFor="type">Item Type:</label>
				<input type="text"
						name="type"
						onChange={this.onChange}
						value={this.state.type}/>
				<br/>
				<label htmlFor="count">Count:</label>
				<input type="number"
						name="count"
						onChange={this.onChange}
						value={this.state.count}/>
				<br/>
				<label htmlFor="price">Price:</label>
				<input type="number"
						name="price"
						step="0.01"
						onChange={this.onChange}
						value={this.state.price}/>
				<br/>
				<input type="submit" value="Add"/>
			</form>
		)
	}
}


export default StateManager(ShoppingForm);