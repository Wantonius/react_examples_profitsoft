import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';

function App() {
	
	const[state,setState] = useState({
		list:[],
		id:100
	})
	
	const addToList = (item) => {
		item.id = state.id;
		let tempList = state.list.concat(item);
		setState({
			list:tempList,
			id:state.id+1
		})
	}
	
	return (
		<div className="App">
			<ShoppingForm addToList={addToList}/>
			<hr/>
			<ShoppingList list={state.list}/>
		</div>
	);
}

export default App;
