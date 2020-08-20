import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import ArticleWrapper from '../components/article-wrapper';
import { Client } from '../prismic-configuration.js';

const Videos = ({ content }) => {
	if (!content.data) return null;

	return (
		<ArticleWrapper>
			<h1>Videos</h1>
			<RichText render={content.data.body} />
		</ArticleWrapper>
	);
};

export async function getStaticProps() {
	try {
		const content = await Client().getSingle('videos');
		return { props: { content }, revalidate: 1 };
	} catch (error) {
		return { props: { content: {} } };
	}
}

Videos.propTypes = {
	content: PropTypes.object.isRequired,
};

export default Videos;
