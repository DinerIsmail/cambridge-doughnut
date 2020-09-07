import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import PrismicDOM from 'prismic-dom';
import ArticleWrapper from '../components/article-wrapper';
import Faqs from '../components/faqs';
import { Client } from '../prismic-configuration.js';
import { htmlSerializer } from '../utils/prismicHelpers.js';

const Elements = PrismicDOM.RichText.Elements;

const FAQ = ({ content }) => {
	if (!content.data) return null;

	return (
		<>
			<Head>
				<title>FAQs | Doughnut Economics Cambridge</title>
				<meta property="og:title" content="FAQs | Cambridge Doughnut" />
			</Head>
			<ArticleWrapper>
				<RichText render={content.data.title} />
				<Faqs />
				{/* <RichText render={content.data.body} /> */}
			</ArticleWrapper>
		</>
	);
};

export async function getStaticProps() {
	try {
		const content = await Client().getSingle('faq');
		return { props: { content }, revalidate: 1 };
	} catch (error) {
		return { props: { content: {} } };
	}
}

FAQ.propTypes = {
	content: PropTypes.object.isRequired,
};

export default FAQ;
