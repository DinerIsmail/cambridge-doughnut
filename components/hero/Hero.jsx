import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.module.scss';

const Hero = () => (
	<div className={styles.hero}>
		<div className={styles.textContainer}>
			<h1>Cambridge Doughnut</h1>
			<h2>A tool for transformative action</h2>
		</div>
	</div>
);

Hero.propTypes = {};

export default Hero;
