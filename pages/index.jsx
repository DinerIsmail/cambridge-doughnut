import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import ArticleWrapper from '../components/article-wrapper';
import styles from '../styles/Home.module.scss';
import { Client } from '../prismic-configuration.js';

const Home = ({ content }) => {
	if (!content.data) return null;

	return (
		<ArticleWrapper>
			<RichText render={content.data.body} />
		</ArticleWrapper>
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
