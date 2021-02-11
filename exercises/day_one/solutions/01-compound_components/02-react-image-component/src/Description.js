import React from 'react';

export default class Description extends React.Component {

	render() {
		let style = {
			marginLeft:10
		}
		return(
			<p style={style}>{this.props.text}</p>
		)
	}
}