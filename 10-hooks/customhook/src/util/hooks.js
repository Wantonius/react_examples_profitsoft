import {useState} from 'react';

export const useCount = (initialValue = 0)  => {

	const [value,setValue] = useState(initialValue);
	
	const add = () => {
		setValue((value) => value + 1)
	}
	
	const subtract = () => {
		setValue((value) => value - 1)
	}
	
	return [value,add,subtract];
}