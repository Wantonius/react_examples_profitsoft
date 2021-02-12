import React from 'react';
import {Link} from 'react-router-dom'
export default class Row extends React.Component {

	render() {
		let url = "/hotel/"+this.props.item.id
		return(
			<tr>
				//TODO: Create table cells with the first cell (name) being a Link to url-variable
			</tr>	
		)
	}
}