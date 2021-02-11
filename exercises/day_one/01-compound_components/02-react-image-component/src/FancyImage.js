import React from 'react';
import Image from './Image';
import Description from './Description';

export default class FancyImage extends React.Component {

	render() {
		//Create a suitable style for FancyImage container. Pass the src of the image as prop and also the description of the image to the Description component. Descriptions come
		//from the App component (Outside of the compound component).
	return(
		<div style={style}>
			<Image src={this.props.src}/>
			<Description />
		</div>
	)
	}
}
