import React from 'react';

export default class Redlight extends React.Component {

	render() {
		let style = {
			backgroundColor:"white",
			marginLeft:10,
			height:200,
			width:200
		}
		//TODO: change the backgroundColor to red when the app state is appropriate
		return (
			<div style={style}></div>
		)
		
	
	}
}