import React from 'react';
import Redlight from './Redlight';
import Yellowlight from './Yellowlight';
import Greenlight from './Greenlight';

export default class TrafficLight extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			color:"red",
			timer:0
		}
	}
	
	componentDidMount() {
		let timer = setInterval(() => {
			this.changeLight();
		}, 3000);
		this.setState({
			timer:timer
		})
	}
	
	changeLight = () => {
		if(this.state.color === "red") {
			this.setState({
				color:"green"
			})
			return;
		}
		if(this.state.color === "yellow") {
			this.setState({
				color:"red"
			})
			return;
		}
		this.setState({
			color:"yellow"
		})	
	}
	
	render() {
		let style = {
			backgroundColor:"black",
			height:630,
			width:220,
			margin:"auto",
			marginTop:100,
			paddingTop:10
		}
		return(
			<div style={style}>
				<Redlight color={this.state.color}/>
				<Yellowlight color={this.state.color}/>
				<Greenlight color={this.state.color}/>
			</div>
		)
	}
	
}

