import React from 'react';
import GameContext from './GameContext';

export default class StateProvider extends React.Component {

	//TODO: lisää StateProvider index.js tiedostoon.

    constructor(props) {
	    super(props);
	    this.state = {
		    playername:"",
		    currentTarget:0,
		    gamestate:"init",
		    guesses:0,
			message:"",
			currentHigh:100,
			currentLow:1
	    }
    }
  
    startGame = (playername) => {
		//tuo startgame funktio tänne
	}
  
    resetGame = () => {
		// TODO: resetoi tila
    }
	
	guess = (currentGuess) => {
		//TODO Siirrä guess funktio GameRunner tiedostosta ja korjaa sen toiminta. 
		//Propsit muuttuvat stateiksi.
	}
	
	render() {
		return(
			<GameContext.Provider value={{
				//TODO siirrä tarvittavat funktiot ja staten osat propseiksi komponenteille. 
			}}>			
			{this.props.children}
			</GameContext.Provider>
		)
	}
}