import React from 'react';
import Head from 'next/head';
import ArticleWrapper from '../components/article-wrapper';
import Faqs from '../components/faqs';

const FAQ = () => (
	<>
		<Head>
			<title>FAQs | Doughnut Economics Cambridge</title>
			<meta property="og:title" content="FAQs | Cambridge Doughnut" />
		</Head>
		<ArticleWrapper>
			<h1>FAQs</h1>
			<Faqs />
		</ArticleWrapper>
	</>
);

export default FAQ;
