import React from 'react';
import DealLogo from '../../assets/images/deal.jpg';
import CityCouncilLogo from '../../assets/images/city-council.png';
import ArticleWrapper from '../article-wrapper';
import styles from './Partners.module.scss';

const Partners = () => {
	return (
		<>
			<h2>Our Partners</h2>
			<div className={styles.root}>
				<img alt="Doughnut Economics Action Lab" src={DealLogo} />
				<img alt="Cambridge City Council" src={CityCouncilLogo} />
			</div>
		</>
	);
};

export default Partners;
