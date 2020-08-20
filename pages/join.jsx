import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import ArticleWrapper from '../components/article-wrapper';
import { Client } from '../prismic-configuration.js';

const Join = ({ content }) => {
	if (!content.data) return null;

	return (
		<ArticleWrapper>
			<h1>Join us</h1>
			<RichText render={content.data.body} />
			<iframe
				src="http://eepurl.com/ha-5Fn"
				height="1000"
				scrolling="no"
			/>
		</ArticleWrapper>
	);
};

export async function getStaticProps() {
	try {
		const content = await Client().getSingle('join');
		return { props: { content }, revalidate: 1 };
	} catch (error) {
		return { props: { content: {} } };
	}
}

Join.propTypes = {
	content: PropTypes.object.isRequired,
};

export default Join;
