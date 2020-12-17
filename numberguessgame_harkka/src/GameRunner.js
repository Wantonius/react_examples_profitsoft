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
		/*TODO: Tarkasta onko peli tilassa "playing" (this.props.gamestate).Testataan ensin onko arvaus numero (isNaN-funktio). Seuraavaksi
		testataan onko numero pienempi kuin currentLow tai suurempi kuin currentHigh.
		Jos näiden testien läpi päästään verrataan arvausta currentTargettiin (this.props.currentTarget). Jos arvaus on pienempi, on uusi currentLow arvauksen arvo. Pienempää ei siis voi arvata. Jos arvaus on suurempi. on uusi currentHigh arvauksen arvo eikä suurempaa voi arvata. Jos pelaaja osuu oikeaan, juhlitaan voittoa, kerrotaan arvausten määrä ja resetoidaan peli (this.props.resetGame ja tämän komponentin state alkutilaan)
		*/
	}

	render() {
		return(
			<form onSubmit={this.guess}>
				// TODO: Luo form missä arvataan numeroa. Näytä sekä current low, että current high sekä arvausten määrä.
			</form>
			
		)
	}
}