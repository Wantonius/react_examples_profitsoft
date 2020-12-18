import React from 'react';
import {Link} from 'react-router-dom';
import StateManager from '../statemanager/StateManager';

class Navbar extends React.Component {
	
	render() {
		let navStyle={backgroundColor:"lightblue",height:120}
		if(this.props.isLogged) {
			return(
				<div style={navStyle}>
					<h4>Shopping app</h4>
					<ul style={{listStyleType:"none"}}>
						<li><Link to="/">Shopping List</Link></li>
						<li><Link to="/form">Add to list</Link></li>
						<li><Link to="/" onClick={() => this.props.logout()}>Logout</Link></li>
					</ul>	
				</div>
			)
		} else {
			return(
				<div style={navStyle}>
					<h4>Shopping app</h4>
				</div>
			)
		}
	} 
	
}

export default StateManager(Navbar);