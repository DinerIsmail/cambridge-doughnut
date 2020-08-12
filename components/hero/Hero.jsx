import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.module.scss';

const Hero = () => (
	<div className={styles.hero}>
		<div className={styles.textContainer}>
			<h1>Doughnut Economics Cambridge</h1>
			{/* <h2>You can make a difference</h2> */}
			{/* <Link href="/join">
				<button className={styles.button} type="button">
					Join now
				</button>
			</Link> */}
		</div>
	</div>
);

Hero.propTypes = {};

export default Hero;
