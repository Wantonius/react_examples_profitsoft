import logo from './logo.svg';
import './App.css';
import GameRunner from './GameRunner';
import NameForm from './NameForm';
import React from 'react';
import GameManager from './gamemanager/GameManager';
import {Switch,Route,Redirect} from 'react-router-dom';


class App extends React.Component {
  
  //TODO: asenna react-router-dom, muista lisätä BrowserRouter index.js tiedostoon.
  
  
  render() {
	  return (
			<Switch>
				<Route exact path="/" render={() => this.props.gamestate === "init" ?
				(<NameForm/>) :
				(<Redirect to="/game"/>)
				}/>
				<Route path="/game" render={() => this.props.gamestate === "init" ?
				(<Redirect to="/"/>):
				(<GameRunner/>)
				}/>
			</Switch>
	  );
  }
}

export default GameManager(App);
