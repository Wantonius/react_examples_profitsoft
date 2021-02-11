import React from 'react';

export default class Image extends React.Component {

	render() {
		let style = {
			marginLeft:10,
			marginBottom:10,
			width:250,
			height:400
		}
		return(
			<div style={style}>
				<img src={this.props.src} width="250" height="400" />
			</div>
		)
	}
}