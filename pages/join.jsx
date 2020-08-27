import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import ArticleWrapper from '../components/article-wrapper';
import EmbeddedForm from '../components/embedded-form';
import Button from '../components/display/button';
import { Client } from '../prismic-configuration.js';

const Join = ({ content }) => {
	if (!content.data) return null;

	return (
		<ArticleWrapper>
			<RichText render={content.data.title} />
			<RichText render={content.data.body} />
			<Button href="https://bit.ly/3ay08Aw" label="Join the Coalition" />
			<RichText render={content.data.body2} />
			<EmbeddedForm />
		</ArticleWrapper>
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
