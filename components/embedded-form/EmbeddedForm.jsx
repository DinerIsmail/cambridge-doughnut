import React from 'react';
import PropTypes from 'prop-types';
import styles from './EmbeddedForm.module.scss';

const EmbeddedForm = () => {
	return (
		<iframe
			className={styles.root}
			src="https://eepurl.com/ha-5Fn"
			height="1170"
			scrolling="no"
		/>
	);
};

export default EmbeddedForm;