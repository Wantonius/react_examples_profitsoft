import logo from './logo.svg';
import './App.css';
import GameRunner from './GameRunner';
import NameForm from './NameForm';
import React from 'react';


//TODO: Create a number guessing game where player guesses number between
// 1-100. Game calculates the number of guesses and celebrates when player
// gets it right. 

class App extends React.Component {
  
  constructor(props) {
	  super(props);
	  this.state = {
		  playername:"",
		  currentTarget:0,
		  gamestate:"init"
	  }
  }
  
  startGame = (playername) => {		
		/* TODO: check that the "gamestate" is "init". Create a new game
		   by randomly determining the "currentTarget" to be between 1-100. Set the "gamestate" into "playing" and set "playername"
		   as playername
		*/
  }
  
  resetGame = () => {
		//TODO: Reset the gamestate to initial values
  }
  
  render() {
	  return (
		<div className="App">
			<NameForm startGame={this.startGame}/>
			<hr/>
			<GameRunner gamestate={this.state.gamestate} playername={this.state.playername} currentTarget={this.state.currentTarget} resetGame={this.resetGame}/>
		</div>
	  );
  }
}

export default App;