import classnames from 'classnames';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styles from './ArticleWrapper.module.scss';

const ArticleWrapper = ({ children, extraTopMargin }) => (
	<motion.div
		animate={{ opacity: 1 }}
		className={classnames(styles.root, {
			[styles.extraTopMargin]: extraTopMargin,
		})}
		initial={{ opacity: 0 }}
	>
		{children}
	</motion.div>
);

ArticleWrapper.propTypes = {
	children: PropTypes.array.isRequired,
	extraTopMargin: PropTypes.bool,
};

ArticleWrapper.defaultProps = {
	extraTopMargin: false,
};

export default ArticleWrapper;
