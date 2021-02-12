import Redlight from './Redlight';
import Yellowlight from './Yellowlight';
import Greenlight from './Greenlight';
import {useLight} from './util/hooks';

const TrafficLight = (props) => {

	let state = useLight("yellow");

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