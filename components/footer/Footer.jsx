import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer = ({ className }) => {
	return (
		<footer className={classnames(styles.root, className)}>
			<div>
				<Link href="/privacy-policy">
					<a>Privacy policy</a>
				</Link>
			</div>
			<div>
				<Link href="/about">
					<a>About us</a>
				</Link>
			</div>
		</footer>
	);
};

Footer.propTypes = {
	className: PropTypes.string,
};

export default Footer;
