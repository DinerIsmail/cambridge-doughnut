import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import ArticleWrapper from '../components/article-wrapper';
import { Client } from '../prismic-configuration.js';

const PrivacyPolicy = ({ content }) => {
	if (!content.data) return null;

	return (
		<>
			<Head>
				<title>Privacy Policy | Doughnut Economics Cambridge</title>
				<meta
					property="og:title"
					content="Privacy Policy | Cambridge Doughnut"
				/>
				<meta
					property="og:image"
					content="https://images.prismic.io/cambridgedoughnut/7375626c-7665-4d4e-8a8f-1192483eceb6_og-image.jpg?auto=compress,format"
				/>
			</Head>
			<ArticleWrapper>
				<RichText render={content.data.title} />
				<RichText render={content.data.body} />
			</ArticleWrapper>
		</>
	);
};

export async function getStaticProps() {
	try {
		const content = await Client().getSingle('privacy-policy');
		return { props: { content }, revalidate: 1 };
	} catch (error) {
		return { props: { content: {} } };
	}
}

PrivacyPolicy.propTypes = {
	content: PropTypes.object.isRequired,
};

export default PrivacyPolicy;
