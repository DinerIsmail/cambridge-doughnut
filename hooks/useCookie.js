import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export const useCookie = ({ key }) => {
	const initial = Cookies.get(key);
	const [value, setCurrentValue] = useState(initial);

	useEffect(() => {
		Cookies.set(key, value, { sameSite: 'lax' });
	}, [key, value]);

	return [value, setCurrentValue];
};
