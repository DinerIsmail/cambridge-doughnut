import Prismic from 'prismic-javascript';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Error from 'next/error';

import ArticleWrapper from '../components/article-wrapper';
import { Client } from '../prismic-configuration.js';
import PostContent from '../components/news/post-content';

const Post = ({ content, postId }) => {
	console.log(content);
	const router = useRouter();
	if (router.isFallback) {
		return (
			<ArticleWrapper>
				<h1>Please wait…</h1>
			</ArticleWrapper>
		);
	}

	if (!postId || !content) {
		return (
			<ArticleWrapper>
				<Head>
					<meta name="robots" content="noindex" />
				</Head>
				<Error statusCode={404} />
			</ArticleWrapper>
		);
	}

	return (
		<>
			<Head>
				{content.data.main_image.url ? (
					<meta
						property="og:image"
						content={content.data.main_image.url}
					/>
				) : (
					<meta
						property="og:image"
						content="https://images.prismic.io/cambridgedoughnut/339de155-225e-41b2-b624-f77b28b648a4_S95MarketCambridgefromGreatStMarys.jpg?auto=compress,format"
					/>
				)}
				<meta
					property="og:description"
					content={content.data.preview[0]?.text}
				/>
				<meta
					name="description"
					content={content.data.preview[0]?.text}
				/>
				<meta
					property="og:title"
					content={`${content.data.title[0].text} | Cambridge Doughnut`}
				/>
				<title>{`${content.data.title[0].text} | Cambridge Doughnut`}</title>
			</Head>
			<ArticleWrapper>
				<PostContent
					body={content.data.body}
					date={content.data.created}
					image={content.data.main_image}
					title={content.data.title}
				/>
			</ArticleWrapper>
		</>
	);
};

export async function getStaticProps({ params }) {
	const content = await Client().getByUID('post', params.post);
	const propsObj = { content, postId: params.post };
	return { props: propsObj, revalidate: 1 };
}

export async function getStaticPaths() {
	const content = await Client().query(
		Prismic.Predicates.any('document.type', ['post']),
	);

	const paths = content.results.map((result) => `/${result.uid}`);

	return { paths, fallback: true };
}

Post.propTypes = {
	content: PropTypes.object,
	postId: PropTypes.string,
};

export default Post;
