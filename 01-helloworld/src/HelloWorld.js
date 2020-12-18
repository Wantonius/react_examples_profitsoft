import React from 'react';

export default class HelloWorld extends React.Component {

	render() {
		let name = "World";
		if(this.props.name) {
			name = this.props.name;
		}
		return(
			<h2>Hello {name}</h2>
		) 
	}
}