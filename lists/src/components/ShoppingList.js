import React from 'react'

export default class ShoppingList extends React.Component {

	render() {
		let shoppingItems = this.props.list.map(item => {
			return (
				<tr key={item.id}>
					<td>{item.type}</td>
					<td>{item.count}</td>
					<td>{item.price}</td>
					<td><button onClick={() => this.props.removeFromList(item.id)}>Remove</button></td>
				</tr>
			)
		})
		return(
		<div style={{margin:"auto",textAlign:"center"}}>
			<table>
				<thead>
					<tr>
						<th>Type</th>
						<th>Count</th>
						<th>Price</th>
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