import React from 'react';
import logo from './logo.svg';
import './App.css';
import HotelForm from './components/HotelForm';
import HotelList from './components/HotelList';
import Details from './components/Details';
import Navbar from './components/Navbar';
import {Switch,Route} from 'react-router-dom';

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
	render() {
	  return (
		<div className="App">
			<Navbar/>
			<hr/>
			<Switch>
				<Route exact path="/" render={() => (
					<HotelList list={this.state.list} removeFromList={this.removeFromList}/>
				)}/>
				<Route path="/form" render={() => (
					<HotelForm addToList={this.addToList}/>
				)}/>
				<Route path="/hotel/:id" render={() => (
					<Details list={this.state.list}/>
				)}/>						
			</Switch>
		</div>
	  );
    }
}
export default App;
