import React from 'react';
import Image from './Image';
import Description from './Description';

export default class FancyImage extends React.Component {

	render() {
		let style = {
			backgroundColor:"lightblue",
			width:270,
			height:520,
			paddingTop:10,
			marginTop:100,
			margin:"auto",
		}
	return(
		<div style={style}>
			<Image src={this.props.src}/>
			<Description text={this.props.text}/>
		</div>
	)
	}
}
