import React from 'react';
import Head from 'next/head';
import ArticleWrapper from '../components/article-wrapper';
import Faqs from '../components/faqs';

const FAQ = () => (
	<>
		<Head>
			<title>FAQs | Doughnut Economics Cambridge</title>
			<meta property="og:title" content="FAQs | Cambridge Doughnut" />
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
			<h1>FAQs</h1>
			<Faqs />
		</ArticleWrapper>
	</>
);

export default FAQ;
