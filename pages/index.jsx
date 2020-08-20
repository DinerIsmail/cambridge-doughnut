import PropTypes from 'prop-types';
import styles from '../styles/Home.module.scss';

const Home = ({ content }) => {
	// if (!content.data) return null;

	return (
		<div className={styles.root}>
			<div className={styles.main}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Donec sit amet arcu sagittis, volutpat ligula ac, gravida
					nulla. Sed feugiat blandit ante et blandit. Phasellus
					eleifend, elit quis suscipit pulvinar, leo lorem iaculis
					odio, sed eleifend lorem justo a risus. Duis imperdiet
					sollicitudin felis non ultrices. In magna augue, lobortis
					vehicula lacinia vel, efficitur cursus nunc. Fusce
					sollicitudin est a odio eleifend, eu sagittis leo suscipit.
					Aliquam lectus turpis, tincidunt at augue ut, ornare
					ultrices lectus. Phasellus sed risus a velit sagittis
					aliquet.
				</p>
				<p>
					Mauris ut est dictum, malesuada neque non, facilisis nulla.
					Praesent non aliquam mauris. Integer molestie mi sit amet
					sem iaculis mollis. Nulla nibh est, eleifend vitae feugiat
					in, dignissim eu augue. Morbi tortor arcu, luctus quis orci
					in, venenatis tempor elit. Aenean varius eleifend nibh, et
					venenatis ante dictum ac. Fusce imperdiet euismod urna nec
					cursus. Vestibulum quis massa vel erat tempor porttitor at
					consequat lacus. Suspendisse tincidunt id eros vel
					vestibulum. Suspendisse pulvinar mi dolor, et finibus tortor
					sagittis sit amet. Integer congue imperdiet leo id
					convallis. Quisque est lacus, fermentum a ex quis, tristique
					tempus augue. Ut a sodales nisl. Quisque justo dolor,
					commodo quis euismod a, dictum id odio.
				</p>
			</div>
			<div className={styles.sidebar}>
				Email newsletter signup form...
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
