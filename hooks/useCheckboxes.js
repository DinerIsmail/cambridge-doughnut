import React, { useState } from 'react';

const formatCheckboxes = (checkboxes) =>
	checkboxes.map((checkbox) => ({
		id: checkbox.id,
		label: checkbox.label,
		checked: false,
	}));

export const useCheckboxes = (defaultCheckboxes) => {
	const [checkboxes, setCheckboxes] = useState(
		formatCheckboxes(defaultCheckboxes),
	);
	function setCheckbox(index, checked) {
		const newCheckboxes = [...checkboxes];
		newCheckboxes[index].checked = checked;
		setCheckboxes(newCheckboxes);
	}
	return {
		setCheckbox,
		checkboxes,
	};
};
