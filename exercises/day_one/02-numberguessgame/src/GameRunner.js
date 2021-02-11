import React from 'react'

export default class GameRunner extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentGuess:0,
			guesses:0,
			message:"",
			currentHigh:100,
			currentLow:1
		}
	}
	onChange = (event) => {
		let state = {};
		state[event.target.name] = event.target.value;
		this.setState(state);
	}	
	guess = () => {
		
		/*
		TODO: Check that the "gamestate" (this.props.gamestate) is 
		"playing". If not return. Check that the "currentGuess" is 
		a number (isNan()-function). Next check that "currentGuess"
		is between "currentLow" and "currentHigh". If not, set "message"
		to inform the user and return.
		
		After this compare "currentGuess" to this.props.currentTarget. If
		the guess is higher, change "currentHigh" to value of
		"currentGuess" and tell the user that it was too high and they
		need to guess again. And the vice versa with "currentLow".
		
		If the user guesses correctly display a celebrating message with
		the number of guesses needed. Then reset the state of GameRunner
		and call this.props.resetGame to reset App.
		*/
	}

	render() {
		return(
			<form onSubmit={this.guess}>
				// TODO: Create a form to guess the number (currentGuess).
				// Add messages for currentHigh, currentLow, number of 
				// guesses and the actual information message.
			</form>
			
		)
	}
}