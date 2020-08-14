import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.root}>
			<div>
				<b>
					Doughnut
					<br /> Economy
					<br />
				</b>{' '}
				Cambridge
			</div>
			<div>
				<Link href="/about">
					<a>About us</a>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
