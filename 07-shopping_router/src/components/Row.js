import React from 'react';

export default class Row extends React.Component {

	render() {
		return(
			<tr>
				<td>{this.props.item.type}</td>
				<td>{this.props.item.count}</td>
				<td>{this.props.item.price}</td>
				<td><button onClick={() => this.props.handleRemoveButton(this.props.item.id)}>Remove</button></td>
				<td><button onClick={() => this.props.handleEditButton(this.props.item.id)}>Edit</button></td>
			</tr>	
		)
	}
}