import React from 'react';

export default class Image extends React.Component {

	render() {
		//TODO: Create a suitable image style. Remember to add width and height variables into <img>-tag.
		return(
			<div style={style}>
				<img src={this.props.src} />
			</div>
		)
	}
}