import Head from 'next/head';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import ArticleWrapper from '../components/article-wrapper';
import styles from '../styles/Home.module.scss';
import { Client } from '../prismic-configuration.js';

const Home = ({ content }) => {
	if (!content.data) return null;

	return (
		<>
			<Head>
				<title>
					Doughnut Economics Cambridge | A tool for transformative
					action
				</title>
				<meta
					property="og:title"
					content="Cambridge Doughnut | A tool for transformative action"
				/>
			</Head>
			<ArticleWrapper>
				<RichText render={content.data.body} />
			</ArticleWrapper>
		</>
	);
};

export async function getStaticProps() {
	try {
		const content = await Client().getSingle('home');
		return { props: { content }, revalidate: 1 };
	} catch (error) {
		return { props: { content: {} } };
	}
}

Home.propTypes = {
	content: PropTypes.object.isRequired,
};

export default Home;
