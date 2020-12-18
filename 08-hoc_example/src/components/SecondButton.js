import React from 'react';
import Decorator from './Decorator';

class SecondButton extends React.Component {

	callback = (event) => {
		this.props.callback("You pressed the second button");
	}
	
	render() {
		let buttonStyle = {
			backgroundColor:this.props.color
		}
		return (
			<button style={buttonStyle} onClick={this.callback}>Press me!</button>
		)
	}
}

export default Decorator(SecondButton);