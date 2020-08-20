import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import ArticleWrapper from '../components/article-wrapper';
import Partners from '../components/partners';
import { Client } from '../prismic-configuration.js';

const About = ({ content }) => {
	if (!content.data) return null;

	return (
		<ArticleWrapper>
			<h1>About us</h1>
			<RichText render={content.data.body} />
			<Partners />
		</ArticleWrapper>
	);
};

export async function getStaticProps() {
	try {
		const content = await Client().getSingle('about');
		return { props: { content }, revalidate: 1 };
	} catch (error) {
		return { props: { content: {} } };
	}
}

About.propTypes = {
	content: PropTypes.object.isRequired,
};

export default About;
