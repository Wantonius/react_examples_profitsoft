import {useState,useEffect} from 'react';

export const useLight = (initialState = "red") => {
	
	const [state,setState] = useState({
		color:initialState
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
	
	return state;

}