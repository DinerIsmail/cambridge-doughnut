import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link';
import FacebookIcon from '../../assets/icons/facebook.svg';
import TwitterIcon from '../../assets/icons/twitter.svg';
import styles from './Footer.module.scss';

const socialLinks = [
	{
		path: 'https://facebook.com/CamDoughnut',
		Icon: FacebookIcon,
	},
	{
		path: 'https://twitter.com/CamDoughnut',
		Icon: TwitterIcon,
	},
];

const Footer = ({ className }) => (
	<footer className={classnames(styles.root, className)}>
		<section className={styles.links}>
			<div className={styles.link}>
				<Link href="/privacy-policy">
					<a>Privacy policy</a>
				</Link>
			</div>
			<div className={styles.link}>
				<Link href="mailto:info@cambridgedoughnut.org.uk">
					<a>info@cambridgedoughnut.org.uk</a>
				</Link>
			</div>
			<ul className={styles.socialLinks}>
				{socialLinks.map(({ path, Icon }) => (
					<li key={path} className={styles.item}>
						<a
							href={path}
							className={styles.link}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Icon className={styles.icon} />
						</a>
					</li>
				))}
			</ul>
		</section>
		<div className={styles.copyright}>
			Copyright © 2020 Cambridge Doughnut
		</div>
	</footer>
);

Footer.propTypes = {
	className: PropTypes.string,
};

export default Footer;
