import { useRouter } from 'next/router';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Header from '../header';
import Footer from '~/components/footer';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
	const { pathname } = useRouter();
	return (
		<>
			<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
				<Header className={styles.header} showHero={pathname === '/'} />
				<main className={styles.main}>
					<div className={styles.container}>{children}</div>
				</main>
				<Footer className={styles.footer} />
			</motion.div>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
		.isRequired,
};

export default Layout;
