import logo from './logo.svg';
import './App.css';
import GameRunner from './GameRunner';
import NameForm from './NameForm';
import React from 'react';

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
	  if(this.state.gamestate === "init") {
		  let temp = Math.floor(Math.random()*100)+1;
		  this.setState({
			playername:playername,
			gamestate:"playing",
			currentTarget:temp
		  })
	  }
  }
  
  resetGame = () => {
	  this.setState({
		  playername:"",
		  currentTarget:0,
		  gamestate:"init"		  
	  })
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
