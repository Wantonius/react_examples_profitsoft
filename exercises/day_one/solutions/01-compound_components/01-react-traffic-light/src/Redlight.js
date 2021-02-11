import React from 'react';

export default class Redlight extends React.Component {

	render() {
		let style = {
			backgroundColor:"white",
			marginLeft:10,
			height:200,
			width:200
		}
		if(this.props.color === "red") {
			style.backgroundColor = "red"
		}
		return (
			<div style={style}></div>
		)
		
	
	}
}