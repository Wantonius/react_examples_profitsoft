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
	guess = (event) => {
		event.preventDefault();
		if(this.props.gamestate === "init") {
			return;
		}
		if(isNaN(this.state.currentGuess)) {
			this.setState({
				message:"Try guessing a number!"
			})
			return;
		}
		if(this.state.currentGuess < this.state.currentLow) {
			this.setState({
				message:"Too low. Try guessing between "+this.state.currentLow+" and "+this.state.currentHigh
			})
			return;			
		}
		if(this.state.currentGuess > this.state.currentHigh) {
			this.setState({
				message:"Too high. Try guessing between "+this.state.currentLow+" and "+this.state.currentHigh
			})
			return;			
		}
		if(this.state.currentGuess > this.props.currentTarget) {
			this.setState(state => ({
				message:"Your guess was too high. Try guessing again",
				guesses:state.guesses+1,
				currentHigh:state.currentGuess
			}))
			return;
		}
		if(this.state.currentGuess < this.props.currentTarget) {
			this.setState(state => ({
				message:"Your guess was too low. Try guessing again",
				guesses:state.guesses+1,
				currentLow:state.currentGuess
			}))
			return;
		}
		let temp = this.state.guesses+1;
		alert("Congrats "+this.props.playername+".You win with "+temp+" guesses!")
		this.setState({
			currentGuess:0,
			guesses:0,
			message:"",
			currentHigh:100,
			currentLow:1			
		}) 
		this.props.resetGame();
	}

	render() {
		return(
			<form onSubmit={this.guess}>
				<p>Hello, {this.props.playername}. Guess a number between {this.state.currentLow} and {this.state.currentHigh}</p>
				<p>The game says:{this.state.message}</p>
				<input type="number"
						name="currentGuess"
						onChange={this.onChange}
						value={this.state.currentGuess}/>
				<input type="submit" value="guess"/>
			</form>
			
		)
	}
}