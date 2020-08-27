import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer = ({ className }) => (
	<footer className={classnames(styles.root, className)}>
		<section className={styles.links}>
			<div className={styles.link}>
				<Link href="/privacy-policy">
					<a>Privacy policy</a>
				</Link>
			</div>
			<div className={styles.link}>
				<Link href="/about">
					<a>About us</a>
				</Link>
			</div>
		</section>
		<div className={styles.copyright}>Copyright © 2020 Cambridge Doughnut</div>
	</footer>
);

Footer.propTypes = {
	className: PropTypes.string,
};

export default Footer;
