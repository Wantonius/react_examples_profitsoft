import Redlight from './Redlight';
import Yellowlight from './Yellowlight';
import Greenlight from './Greenlight';
import {useState,useEffect} from 'react';

const TrafficLight = (props) => {

	const [state,setState] = useState({
		color:"red"
	})
	
	useEffect(() => {
		//TODO:create the interval with the function to change to state between red->green->yellow->red
	
		//TODO: return a function to clear the interval so that there are no multiple intervals running.
	},[state.color])
	let style = {
		backgroundColor:"black",
		height:630,
		width:220,
		margin:"auto",
		marginTop:100,
		paddingTop:10
	}
	return(
			<div style={style}>
				<Redlight color={state.color}/>
				<Yellowlight color={state.color}/>
				<Greenlight color={state.color}/>
			</div>
	)
}

export default TrafficLight;