import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomepageHighlight.module.scss';

const HomepageHighlight = () => {
	return (
		<section className={styles.root}>
			<div className={styles.section}>
				<h2>Our Vision</h2>
				<p>
					We envisage a world with an economy that operates within the
					Earth’s capacity, protects the natural environment and meets
					the social and economic needs of all people. Kate Raworth’s{' '}
					<a
						href="https://doughnuteconomics.org/"
						target="_blank"
						rel="noreferrer"
					>
						Doughnut Economics initiative
					</a>
					, now taken up by several cities, lays out a clear pathway
					towards such a world, one that we can all set out on
					together.
				</p>
			</div>
			<div className={styles.section}>
				<h2>Our Mission</h2>
				<p>
					We seek to promote an economy based on doughnut principles
					in Cambridge. We will facilitate its introduction by
					empowering individuals and organisations with the knowledge
					and tools they need to co-create a more socially and
					ecologically just city.
				</p>
			</div>
		</section>
	);
};

HomepageHighlight.propTypes = {};

export default HomepageHighlight;
