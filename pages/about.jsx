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
				<meta
					property="og:title"
					content="About | Cambridge Doughnut"
				/>
				<meta
					property="og:image"
					content="https://images.prismic.io/cambridgedoughnut/7375626c-7665-4d4e-8a8f-1192483eceb6_og-image.jpg?auto=compress,format"
				/>
				<meta
					property="og:description"
					content="We envisage a world with an economy that operates within the Earth’s capacity, protects the natural environment and meets the social and economic needs of all people."
				/>
				<meta
					name="description"
					content="We envisage a world with an economy that operates within the Earth’s capacity, protects the natural environment and meets the social and economic needs of all people."
				/>
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
