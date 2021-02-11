import React from 'react';

export default class Greenlight extends React.Component {

	render() {
		let style = {
			backgroundColor:"white",
			marginTop:10,
			marginLeft:10,
			height:200,
			width:200
		}
		//TODO: change the backgroundColor to green when the app state is appropriate
		return (
			<div style={style}></div>
		)
		
	
	}
}