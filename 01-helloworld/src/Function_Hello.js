import React from 'react';

//function Function_Hello(props) {
const Function_Hello = (props) => {
	let name = "World";
	if(props.name) {
		name = props.name;
	}
	return(
		<h2>Function Hello {name}</h2>
	)
}

export default Function_Hello