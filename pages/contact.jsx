import React from 'react';
import PropTypes from 'prop-types';
import ArticleWrapper from '../components/article-wrapper';

const Contact = () => {
	return (
		<ArticleWrapper>
			<h1>Contact</h1>
		</ArticleWrapper>
	);
};

Contact.propTypes = {
	content: PropTypes.object.isRequired,
};

export default Contact;
