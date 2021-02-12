import React from 'react'
import Row from './Row';

export default class HotelList extends React.Component {

	render() {
		let shoppingItems = this.props.list.map((item) => {
			return (
				<Row key={item.id} item={item} removeFromList={this.props.removeFromList}/>
			)
		})
		return(
		<div style={{margin:"auto",textAlign:"center"}}>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Address</th>
						<th>City</th>
						<th>Country</th>
						<th>Remove</th>
					</tr>
				</thead>
				<tbody>
					{shoppingItems}
				</tbody>
			</table>
		</div>
		)
	}
}