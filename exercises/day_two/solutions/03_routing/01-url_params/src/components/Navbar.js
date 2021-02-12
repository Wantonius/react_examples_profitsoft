import React from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component {
	
	render() {
		let navStyle={backgroundColor:"lightblue",height:120}
		return(
			<div style={navStyle}>
				<h4>Hotel app</h4>
				<ul style={{listStyleType:"none"}}>
					<li><Link to="/">Hotel List</Link></li>
					<li><Link to="/form">Add to list</Link></li>
				</ul>	
			</div>
		)
		}
	
}