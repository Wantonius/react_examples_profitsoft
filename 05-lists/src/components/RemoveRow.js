import React from 'react';

export default class RemoveRow extends React.Component {

	render() {
		return(
			<tr>
				<td>{this.props.item.type}</td>
				<td>{this.props.item.count}</td>
				<td>{this.props.item.price}</td>
				<td><button onClick={() => this.props.cancel()}>Cancel</button></td>
				<td><button onClick={() => this.props.removeFromList(this.props.item.id)}>Confirm</button></td>
				
			</tr>	
		)
	}
}