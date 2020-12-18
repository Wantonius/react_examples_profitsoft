import React from 'react';
import StateContext from './context/StateContext';

const StateManager = (Component) => {
	return class extends React.Component {
		render() {
			return (
				<StateContext.Consumer>
					{value => <Component {...this.props} {...value}/>}
				</StateContext.Consumer>
			)
		}
	}
}

export default StateManager;