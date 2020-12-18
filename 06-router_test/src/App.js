import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Link,Route,Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Secret from './Secret';

class App extends React.Component {
    render() {
		return (
			<div className="App">
				<ul style={{listStyleType:"none"}}>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
				</ul>
				<hr/>
				<Switch>
					<Route exact path="/">
						<Home/>
					</Route>
					<Route path="/about" component={About}/>
					<Route path="/secret" component={Secret}/>
				</Switch>
			</div>
		);
    }
}

export default App;
