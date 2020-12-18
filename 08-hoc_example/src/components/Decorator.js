import React from 'react';

const Decorator = (Component) => {

	return class extends React.Component {
		constructor(props) {
			super(props);
			this.state={
				color:"red"
			}
		}
		
		update = (event) => {
			let state = {};
			state[event.target.name] = event.target.value;
			this.setState(state);
		}
		
		render() {
			return(
				<div>
					<Component color={this.state.color} {...this.props}/>
					<input type="text"
							name="color"
							onChange={this.update}
							value={this.state.color}/>
				</div>
			)
		}
	
	}
}

export default Decorator;