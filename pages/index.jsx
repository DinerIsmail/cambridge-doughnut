import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import styles from '../styles/Home.module.scss';
import { Client } from '../prismic-configuration.js';

const Home = ({ content }) => {
	if (!content.data) return null;

	return (
		<div className={styles.root}>
			<div className={styles.main}>
				<RichText render={content.data.body} />
			</div>
			<div className={styles.sidebar}>
				<iframe
					src="https://eepurl.com/ha-5Fn"
					height="1000"
					scrolling="no"
				/>
			</div>
		</div>
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
