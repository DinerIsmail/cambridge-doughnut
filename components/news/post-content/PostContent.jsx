import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import dayjs from 'dayjs';

import styles from './PostContent.module.scss';

const PostContent = ({ body, date, image, title }) => {
	const dateCreated = dayjs(date);

	return (
		<>
			<div className={styles.root}>
				<div className={styles.image}>
					{image?.url && <img alt={image?.alt} src={image?.url} />}
				</div>
				<RichText render={title} />
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

PostContent.propTypes = {};

export default PostContent;
