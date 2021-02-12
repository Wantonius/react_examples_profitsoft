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
		event.preventDefault();
		let item = {
			name:this.state.name,
			address:this.state.address,
			comment:this.state.comment,
			city:this.state.city,
			country:this.state.country
		}
		this.props.addToList(item);
		this.setState({
			name:"",
			address:"",
			city:"",
			country:"",
			comment:""
		})
	}
	
	render() {
		return(
			<form onSubmit={this.onSubmit}>
				<label htmlFor="name">Name:</label>
				<input type="text"
						name="name"
						onChange={this.onChange}
						value={this.state.name}/>
				<br/>
				<label htmlFor="address">Address:</label>
				<input type="text"
						name="address"
						onChange={this.onChange}
						value={this.state.address}/>
				<br/>
				<label htmlFor="city">City:</label>
				<input type="text"
						name="city"
						onChange={this.onChange}
						value={this.state.city}/>
				<br/>
				<label htmlFor="country">Country:</label>
				<input type="text"
						name="country"
						onChange={this.onChange}
						value={this.state.country}/>
				<br/>
				<label htmlFor="comment">Comment:</label>
				<input type="text"
						name="comment"
						onChange={this.onChange}
						value={this.state.comment}/>
				<br/>				
				<input type="submit" value="Add"/>
			</form>
		)
	}
}