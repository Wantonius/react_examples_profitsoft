import Redlight from './Redlight';
import Yellowlight from './Yellowlight';
import Greenlight from './Greenlight';
import {useState,useEffect} from 'react';
const TrafficLight = (props) => {

	const [state,setState] = useState({
		color:"red"
	})
	
	useEffect(() => {
		let interval;
		
		interval = setInterval(() => {
			if(state.color === "red") {
				setState({
					color:"green"
				})
			}
			if(state.color === "green") {
				setState({
					color:"yellow"
				})
			}
			if(state.color === "yellow") {
				setState({
					color:"red"
			})
			}
		},3000);
	
		return () => clearInterval(interval);
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