import React from 'react';
import PropTypes from 'prop-types';

import Item from './item';
import styles from './List.module.scss';

const List = ({ posts }) => (
	<>
		<h1>Newsroom</h1>
		<div className={styles.list}>
			{posts.map((post) => (
				<Item key={post.id} post={post} />
			))}
		</div>
	</>
);

List.propTypes = {
	posts: PropTypes.array.isRequired,
};

export default List;
