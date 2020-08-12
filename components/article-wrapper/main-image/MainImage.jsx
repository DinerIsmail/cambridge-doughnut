import PropTypes from 'prop-types';
import styles from './MainImage.module.scss';

const MainImage = ({ src }) => (
	<div className={styles.root}>
		<img
			alt="Person breathing mindfully"
			className={styles.mainImage}
			src={src}
		/>
	</div>
);

MainImage.propTypes = {
	src: PropTypes.string.isRequired,
};

export default MainImage;
