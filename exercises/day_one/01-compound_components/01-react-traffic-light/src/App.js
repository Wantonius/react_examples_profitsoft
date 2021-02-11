import logo from './logo.svg';
import './App.css';
import React from 'react';
import TrafficLight from './TrafficLight'
class App extends React.Component {
	render() {
	    return (
			<div className="App">	
				<TrafficLight/>
			</div>
	    );
	}
}

export default App;
