import React from 'react';
import Square from './Square';
import Label from './Label';

export default class Card extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			color:"red"
		}
	}
	
	onColorChange = () => {
		let color = "#";
		let colors = "ABCDEF0123456789"
		for(let i=0;i<6;i++) {
			let temp = Math.floor(Math.random()*16);
			color = color + colors[temp]
		}
		this.setState({
			color:color
		})
	}
	
	render() {
		let cardStyle = {
			height:200,
			width:150,
			backgroundColor:"#FFF",
			WebkitFilter:"drop-shadow(0px 0px 5px #666)",
			filter:"drop-shadow(0px 0px 5px #666)"
		}
		return(
			<div style={cardStyle}>
				<Square color={this.state.color}/>
				<Label color={this.state.color} colorChangeFunction={this.onColorChange}/>
			</div>
		)
	}
}