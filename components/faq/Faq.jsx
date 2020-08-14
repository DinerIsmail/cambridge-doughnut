import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import Item from './item';

const Faq = ({ questions }) => {
	const [expandedIndex, setExpandedIndex] = useState(0);

	return (
		<>
			{questions.map(({ question, answer }, i) => (
				<Item
					answer={answer}
					expanded={expandedIndex}
					index={i}
					key={question}
					question={question}
					setExpanded={setExpandedIndex}
				/>
			))}
		</>
	);
};

Faq.propTypes = {};

export default Faq;
