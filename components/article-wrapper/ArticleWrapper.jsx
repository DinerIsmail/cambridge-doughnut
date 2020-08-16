import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styles from './ArticleWrapper.module.scss';

const ArticleWrapper = ({ children }) => (
	<motion.div
		animate={{ opacity: 1 }}
		className={styles.root}
		initial={{ opacity: 0 }}
	>
		{children}
	</motion.div>
);

ArticleWrapper.propTypes = {
	children: PropTypes.array.isRequired,
};

export default ArticleWrapper;
