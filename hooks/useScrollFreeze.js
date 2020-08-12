import { useEffect } from 'react';

export const useScrollFreeze = () => {
	useEffect(() => {
		const original = window.getComputedStyle(document.body).overflow;
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = original;
		};
	}, []);
};
