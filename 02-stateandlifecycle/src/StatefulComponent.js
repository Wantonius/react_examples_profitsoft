import React from 'react';

export default class StatefulComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			seconds:0,
			timerId:0
		}
	}
	
	componentDidMount() {
		console.log("StatefulComponent - ComponentDidMount");
		let timerId = setInterval(this.timer,1000);
		this.setState({
			timerId:timerId
		})
	}
	
	componentWillUnmount() {
		clearInterval(this.state.timerId);
	}

	timer = () => {
		console.log("StatefulComponent - timer");
		this.setState((state) => ({
			seconds:state.seconds+1		
		}));
	}
	
	render() {
		return (
			<h2>Seconds since page loaded:{this.state.seconds}</h2>
		)
	}
}