import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Item.module.scss';

const Item = ({ answer, expanded, index, question, setExpanded }) => {
	const isOpen = index === expanded;

	return (
		<section className={styles.root}>
			<motion.header
				className={styles.question}
				initial={false}
				animate={{ backgroundColor: isOpen ? '#FF0088' : '#0055FF' }}
				onClick={() => setExpanded(isOpen ? false : index)}
			>
				{question}
			</motion.header>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.section
						className={styles.answer}
						key="content"
						initial="collapsed"
						animate="open"
						exit="collapsed"
						variants={{
							open: { opacity: 1, height: 'auto' },
							collapsed: { opacity: 0, height: 0 },
						}}
						transition={{
							duration: 0.8,
							ease: [0.04, 0.62, 0.23, 0.98],
						}}
					>
						<motion.div
							variants={{
								collapsed: { scale: 0.8 },
								open: { scale: 1 },
							}}
							transition={{ duration: 0.8 }}
							className="content-placeholder"
						>
							{answer}
						</motion.div>
					</motion.section>
				)}
			</AnimatePresence>
		</section>
	);
};

Item.propTypes = {
	answer: PropTypes.string.isRequired,
	expanded: PropTypes.number,
	index: PropTypes.number.isRequired,
	question: PropTypes.string.isRequired,
	setExpanded: PropTypes.func,
};

export default Item;
