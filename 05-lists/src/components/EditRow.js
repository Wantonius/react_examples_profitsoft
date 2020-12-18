import React from 'react';

export default class EditRow extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			type:props.item.type,
			count:props.item.count,
			price:props.item.price
		}
	}
	
	onChange = (event) => {
		let state = {};
		state[event.target.name] = event.target.value;
		this.setState(state);
	}
	
	editItem = (event) => {
		event.preventDefault();
		let item = {
			id:this.props.item.id,
			type:this.state.type,
			count:this.state.count,
			price:this.state.price
		}
		this.props.editItem(item);
	}

	render() {
		return(
			<tr>
				<td><input type="text"
					name="type"
					onChange={this.onChange}
					value={this.state.type}/>
				</td>
				<td><input type="number"
					name="count"
					onChange={this.onChange}
					value={this.state.count}/>
				</td>
				<td><input type="number"
					name="price"
					onChange={this.onChange}
					step="0.01"
					value={this.state.price}/>
				</td>
				<td><button onClick={this.editItem}>Save</button></td>
				<td><button onClick={() => this.props.cancel()}>Cancel</button></td>
			</tr>	
		)
	}
}