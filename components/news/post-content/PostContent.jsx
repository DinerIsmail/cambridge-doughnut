import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import dayjs from 'dayjs';

import styles from './PostContent.module.scss';

const PostContent = ({ author, body, date, image, title }) => {
	const dateCreated = dayjs(date);

	return (
		<>
			<div className={styles.root}>
				<div className={styles.image}>
					{image?.url && <img alt={image?.alt} src={image?.url} />}
				</div>
				<RichText render={title} />
				{author.length > 0 && (
					<span className={styles.author}>
						by <RichText render={author} />
					</span>
				)}
				{dateCreated.isValid() && (
					<div className={styles.date}>
						{dateCreated.format('MMMM D, YYYY')}
					</div>
				)}
				<RichText render={body} />
			</div>
		</>
	);
};

PostContent.propTypes = {
	author: PropTypes.array.isRequired,
	body: PropTypes.array.isRequired,
	date: PropTypes.string,
	image: PropTypes.object.isRequired,
	title: PropTypes.array.isRequired,
};

export default PostContent;
