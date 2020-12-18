import React,{useState} from 'react';

const ShoppingForm = (props) => {
	
	const [state,setState] = useState({
		type:"",
		count:0,
		price:0
	})
	
	const onChange = (event) => {
		setState({
			...state,
			[event.target.name]:event.target.value
		})
	}
	
	const onSubmit = (event) => {
		event.preventDefault();
		props.addToList(state);
		setState({
			type:"",
			count:0,
			price:0
		})
	}
	
	return (
		<form onSubmit={onSubmit}>
			<label htmlFor="type">Type:</label>
			<input type="text"
					name="type"
					onChange={onChange}
					value={state.type}/>
			<br/>
			<label htmlFor="count">Count:</label>
			<input type="number"
					name="count"
					onChange={onChange}
					value={state.count}/>
			<br/>
			<label htmlFor="price">Price:</label>
			<input type="number"
					name="price"
					step="0.01"
					onChange={onChange}
					value={state.price}/>
			<br/>
			<input type="submit" value="Add"/>
		</form>
	)
}

export default ShoppingForm;