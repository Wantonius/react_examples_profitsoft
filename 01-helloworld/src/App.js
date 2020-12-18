import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
import Function_Hello from './Function_Hello';

class App extends React.Component {
  render() {
	  return (
		<div className="App">
			<HelloWorld />
			<HelloWorld name="Erno"/>
			<Function_Hello />
			<Function_Hello name="Erno"/>
		</div>
	  );
  }
}

export default App;
