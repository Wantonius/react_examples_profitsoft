import React from 'react';
import {withRouter} from 'react-router-dom'
class Details extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			index:0
		}
	}

	componentDidMount() {
		//TODO: get the id from the url param (this.props.match.params.id) and find the proper index of the hotel object in the list for the details info. Save the index to the state.
	}
	
	render() {
		let style = {
			width:200,
			height:300,
			backgroundColor:"lightgreen",
			margin:"auto",
			textAlign:"center"
		}
		return(
			<div style={style}>
				//TODO: Create a detailed info from the proper index. Accessing single piece of information for example hotel name: this.props.list[this.state.index].name
			</div>
			
			
		)	
	}
}
//We need this helper decorator to access the routing context. https://reactrouter.com/web/api/withRouter
export default withRouter(Details);