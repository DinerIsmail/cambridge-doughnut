import { useState } from 'react';

export const useToggle = (initialState = false) => {
	const [isToggled, setToggle] = useState(initialState);

	const toggle = () => setToggle((prevState) => !prevState);
	return [isToggled, setToggle, toggle];
};
