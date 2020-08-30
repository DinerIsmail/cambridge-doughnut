import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import ArticleWrapper from '../components/article-wrapper';
import Partners from '../components/partners';
import { Client } from '../prismic-configuration.js';

const About = ({ content }) => {
	if (!content.data) return null;

	return (
		<>
			<Head>
				<title>About | Doughnut Economics Cambridge</title>
				<meta property="og:title" content="About | Cambridge Doughnut" />
			</Head>
			<ArticleWrapper>
				<RichText render={content.data.title} />
				<RichText render={content.data.body} />
				<Partners />
			</ArticleWrapper>
		</>
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
