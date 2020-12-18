import React from 'react'
import Row from './Row';
import RemoveRow from './RemoveRow';
import EditRow from './EditRow';

export default class ShoppingList extends React.Component {

	constructor(props) {
		super(props);
		this.state={
			removeIndex:-1,
			editIndex:-1
		}
	}
	
	handleRemoveButton = (id) => {
		for(let i=0;i<this.props.list.length;i++) {
			if(id === this.props.list[i].id) {
				this.setState({
					removeIndex:i,
					editIndex:-1
				})
			}
		}
	}

	handleEditButton = (id) => {
		for(let i=0;i<this.props.list.length;i++) {
			if(id === this.props.list[i].id) {
				this.setState({
					removeIndex:-1,
					editIndex:i
				})
			}
		}
	}
	
	cancel = () => {
		this.setState({
			removeIndex:-1,
			editIndex:-1
		})
	}
	
	removeFromList = (id) => {
		this.props.removeFromList(id);
		this.cancel();
	}
	
	editItem = (item) => {
		this.props.editItem(item);
		this.cancel();
	}

	render() {
		let shoppingItems = this.props.list.map((item,index) => {
			if(this.state.removeIndex === index) {
				return(
					<RemoveRow key={item.id} item={item} removeFromList={this.removeFromList} cancel={this.cancel}/>
				)
			}
			if(this.state.editIndex === index) {
				return (
					<EditRow key={item.id} item={item} editItem={this.editItem} cancel={this.cancel}/>
				)
			}
			return (
				<Row key={item.id} item={item} handleRemoveButton={this.handleRemoveButton} handleEditButton={this.handleEditButton}/>
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
						<th>Edit</th>
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