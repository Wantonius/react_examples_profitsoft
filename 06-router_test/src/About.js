import React from 'react';

export default class About extends React.Component {

	render() {
		return(
		<div>
			<h2>About page</h2>
			<button onClick={() => this.props.history.push("/secret")}>Enter Secret page</button>
		</div>
		)
	}
}