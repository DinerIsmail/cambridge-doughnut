import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import ArticleWrapper from '../components/article-wrapper';
import { Client } from '../prismic-configuration.js';

const Hackathons = ({ content }) => {
	if (!content.data) return null;

	return (
		<ArticleWrapper>
			<RichText render={content.data.title} />
			<RichText render={content.data.body} />
		</ArticleWrapper>
	);
};

export async function getStaticProps() {
	try {
		const content = await Client().getSingle('hackathons');
		return { props: { content }, revalidate: 1 };
	} catch (error) {
		return { props: { content: {} } };
	}
}

Hackathons.propTypes = {
	content: PropTypes.object.isRequired,
};

export default Hackathons;