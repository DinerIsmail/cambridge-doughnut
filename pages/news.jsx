import Head from 'next/head';
import PropTypes from 'prop-types';
import Prismic from 'prismic-javascript';

import { Client } from '../prismic-configuration.js';
import ArticleWrapper from '../components/article-wrapper';
import List from '../components/news/list';

const News = ({ posts }) => (
	<>
		<Head>
			<meta property="og:title" content="Newsroom | Cambridge Doughnut" />
			<title>Newsroom | Cambridge Doughnut</title>
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
			<List posts={posts} />
		</ArticleWrapper>
	</>
);

export async function getStaticProps() {
	try {
		const content = await Client().query(
			Prismic.Predicates.any('document.type', ['post']),
			{ orderings: '[my.post.created desc]', pageSize: 100 },
		);

		return { props: { posts: content.results }, revalidate: 1 };
	} catch (error) {
		return { props: { posts: [] } };
	}
}

News.propTypes = {
	posts: PropTypes.array.isRequired,
};

export default News;
