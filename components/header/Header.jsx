import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import MobileNav from './mobile-nav';
import Hero from '../hero';
import styles from './Header.module.scss';
import Logo from 'assets/logo.png';

const links = [
	// {
	// 	pathname: '/',
	// 	label: 'Home',
	// },
	{
		pathname: '/about',
		label: 'About us',
	},
	{
		pathname: '/join',
		label: 'Join us',
	},
	{
		pathname: '/videos',
		label: 'Videos',
	},
	// {
	// 	pathname: '/hackathons',
	// 	label: 'Hackathons',
	// },
	{
		pathname: '/faq',
		label: 'FAQs',
	},
	{
		pathname: '/contact',
		label: 'Contact',
	},
];

const Header = ({ showHero }) => {
	return (
		<>
			<header className={styles.root}>
				<nav className={styles.navBar}>
					<MobileNav menuItems={links} />
					<Link href="/">
						<img
							alt="Doughnut Economics Cambridge logo"
							className={styles.logo}
							src={Logo}
						/>
					</Link>
					<ul className={styles.navLinks}>
						{links.map(({ pathname, label }) => (
							<Link href={pathname} key={pathname} passHref>
								<li>
									<a className={styles.link}>{label}</a>
								</li>
							</Link>
						))}
					</ul>
				</nav>
			</header>
			{showHero && <Hero />}
		</>
	);
};

Header.propTypes = {};

export default Header;
