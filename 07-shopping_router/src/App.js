import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import {Switch,Route,Redirect} from 'react-router-dom';

class App extends React.Component {
    
	constructor(props) {
		super(props);
		this.state = {
			list:[],
			id:100,
			isLogged:false
		}
	}
	
	login = () => {
		this.setState({
			isLogged:true
		})
	}
	
	logout = () => {
		this.setState({
			isLogged:false
		})
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
			<Navbar isLogged={this.state.isLogged} logout={this.logout}/>
			<hr/>
			<Switch>
				<Route exact path="/" render={() => this.state.isLogged ? 
				(<Redirect to="/list"/>) : 
				(<LoginPage login={this.login}/>)
				}/>
				<Route path="/list" render={() => this.state.isLogged ?
				(<ShoppingList list={this.state.list} removeFromList={this.removeFromList}
				editItem={this.editItem}/>) :
				(<Redirect to="/"/>)
				}/>
				<Route path="/form" render={() => this.state.isLogged ? 
				(<ShoppingForm addToList={this.addToList}/>) :
				(<Redirect to="/"/>)
				}/>
			</Switch>
		</div>
	  );
    }
}

export default App;
