import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';

class App extends React.Component {
    
	constructor(props) {
		super(props);
		this.state = {
			list:[],
			id:100
		}
	}
	
	addToList = (item) => {
		item.id = this.state.id;
		this.setState(state =>({
			list:state.list.concat(item),
			id:state.id+1
		}));
	}
	
	removeFromList = (id) => {
		this.setState(state => {
			let templist = state.list.filter(item => item.id !== id)
			return {
				list:templist
			}
		})
	}
	
	editItem = (item) => {
		let tempList = this.state.list;
		for(let i=0;i<this.state.list.length;i++) {
			if(this.state.list[i].id === item.id) {
				tempList.splice(i,1,item);
				this.setState(state => ({
					list:tempList
				}))
			}
		}
	}
	
	render() {
	  return (
		<div className="App">
			<ShoppingForm addToList={this.addToList}/>
			<hr/>
			<ShoppingList list={this.state.list} removeFromList={this.removeFromList}
			editItem={this.editItem}/>
		</div>
	  );
    }
}

export default App;
