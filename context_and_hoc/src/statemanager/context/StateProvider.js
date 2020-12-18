import React from 'react';
import StateContext from './StateContext';

export default class StateProvider extends React.Component {
	
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
		return(
			<StateContext.Provider value={{
				list:this.state.list,
				isLogged:this.state.isLogged,
				login:this.login,
				logout:this.logout,
				addToList:this.addToList,
				removeFromList:this.removeFromList,
				editItem:this.editItem
			}}>
				{this.props.children}
			</StateContext.Provider>
		)			
	}
}