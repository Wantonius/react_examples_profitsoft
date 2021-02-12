import React from 'react';
import {Link} from 'react-router-dom'
export default class Row extends React.Component {

	render() {
		let url = "/hotel/"+this.props.item.id
		return(
			<tr>
				<td><Link to={url}>{this.props.item.name}</Link></td>
				<td>{this.props.item.address}</td>
				<td>{this.props.item.city}</td>
				<td>{this.props.item.country}</td>
				<td><button onClick={() => this.props.removeFromList(this.props.item.id)}>Remove</button></td>
			</tr>	
		)
	}
}