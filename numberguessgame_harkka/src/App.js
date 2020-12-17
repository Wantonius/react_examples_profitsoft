import logo from './logo.svg';
import './App.css';
import GameRunner from './GameRunner';
import NameForm from './NameForm';
import React from 'react';

// TODO: luodaan numeronarvauspeli, jossa arvataan numeroa 1-100 välillä. Lasketaan
// arvausten määrää ja juhlitaan, kun osutaan oikeaan. Jos on arvannut 25 ja kohdenumero
// on suurempi, uusi arvaus tulee olla välillä 25-100. Sama toisin päin eli jos arvaus
// on suurempi ja kohdenumero pienempi, suurempaa ei voi arvata.

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
		/*TODO: Jos gamestate on "init", alusta peli. Arvo numero 1-100 välillä,
			aseta playername ja laita gamestate tilaan "playing"		
		*/
  }
  
  resetGame = () => {
		//TODO resetoi this.state alkutilaan.
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