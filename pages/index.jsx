import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { chakra, Box } from '@chakra-ui/react';
import ArticleWrapper from '../components/article-wrapper';
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
				<Link href="/questions-to-candidates">
					<Box
						bg="#b5ebed"
						mt={4}
						p={3}
						borderRadius={8}
						cursor="pointer"
						transition="background 150ms"
						_hover={{ bg: '#8bc2c4' }}
						onClick={{}}
					>
						<chakra.h2 style={{ marginTop: '0px' }}>
							Questions to Candidates
						</chakra.h2>
						<chakra.p>
							Members of Cambridge Doughnut asked candidates
							standing for the upcoming elections in Cambridge and
							surrounding areas to answer three questions about
							how they will look after the needs of citizens while
							taking into consideration environmental limits and
							the climate emergency. We received responses across
							party lines and a number of candidates referenced
							Doughnut Economics during their campaigning as well.
						</chakra.p>
						<p style={{ marginBottom: '0px' }}>
							Click on this box to read their responses...
						</p>
					</Box>
				</Link>
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
