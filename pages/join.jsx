import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';

import ArticleWrapper from '../components/article-wrapper';
import EmbeddedForm from '../components/embedded-form';
import SignupForm from '../components/signup-form';
import Button from '../components/display/button';
import { Client } from '../prismic-configuration.js';

const Join = ({ content }) => {
	if (!content.data) return null;

	return (
		<>
			<Head>
				<title>Join | Doughnut Economics Cambridge</title>
				<meta property="og:title" content="Join | Cambridge Doughnut" />
				<meta
					property="og:image"
					content="https://images.prismic.io/cambridgedoughnut/339de155-225e-41b2-b624-f77b28b648a4_S95MarketCambridgefromGreatStMarys.jpg?auto=compress,format"
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
				{/* <Button
					href="https://bit.ly/3ay08Aw"
					label="Join the Coalition"
				/> */}
				<RichText render={content.data.body2} />
				<SignupForm />
			</ArticleWrapper>
		</>
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
