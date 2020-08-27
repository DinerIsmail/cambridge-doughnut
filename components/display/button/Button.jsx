import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ centerHorizontally, href, label }) => {
	return centerHorizontally ? (
		<div className={styles.root}>
			<a className={styles.button} href={href} rel="noreferrer noopener" target="_blank">{label}</a>
		</div>
	) :
		(<a className={styles.button} href={href}>{label}</a>);
};

Button.propTypes = {
	centerHorizontally: PropTypes.bool,
	href: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
};

Button.defaultProps = {
	centerHorizontally: true
}

export default Button;