import React from 'react';
import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Link from 'next/link';

import styles from './Item.module.scss';

const Item = ({ post }) => {
	const date = dayjs(post.data.created);

	return (
		<Link href={`/${post.uid}`}>
			<article className={styles.root}>
				<div className={styles.imageContainer}>
					<img
						alt={post.data.list_image?.alt}
						src={post.data.list_image?.url}
					/>
				</div>
				<div className={styles.labelContainer}>
					<RichText render={post.data.title} />
					{date.isValid() && (
						<div className={styles.date}>
							{date.format('MMMM D, YYYY')}
						</div>
					)}
					<RichText render={post.data.preview} />
				</div>
			</article>
		</Link>
	);
};

Item.propTypes = {
	post: PropTypes.object.isRequired,
};

export default Item;
