import classnames from 'classnames';
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { motion, useCycle } from 'framer-motion';

import MenuToggle from './MenuToggle';
import { useDimensions } from '../../../hooks/useDimensions';

import styles from './MobileNav.module.scss';

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		transition: {
			type: 'spring',
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: 'circle(25px at 40px 40px)',
		transition: {
			delay: 0.1,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
};

const MobileNav = ({ menuItems }) => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);

	return (
		<motion.nav
			animate={isOpen ? 'open' : 'closed'}
			className={classnames(styles.root)}
			custom={height}
			initial={false}
			ref={containerRef}
		>
			<motion.div className={styles.background} variants={sidebar}>
				<MenuToggle
					className={styles.toggle}
					toggle={() => toggleOpen()}
				/>
				<ul className={styles.nav}>
					{menuItems.map(({ pathname, label }) => (
						<li className={styles.navItem} key={label}>
							<Link href={pathname}>
								<a
									onClick={() => toggleOpen()}
									role="link"
									tabIndex={0}
									onKeyPress={() => toggleOpen()}
								>
									{label}
								</a>
							</Link>
						</li>
					))}
				</ul>
			</motion.div>
		</motion.nav>
	);
};

MobileNav.propTypes = {
	menuItems: PropTypes.array.isRequired,
};

export default MobileNav;
