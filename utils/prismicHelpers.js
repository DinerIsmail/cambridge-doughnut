import PrismicDOM from 'prismic-dom';

const Elements = PrismicDOM.RichText.Elements;

const htmlSerializer = (type, element, content, children, id) => {
	switch (type) {
		case Elements.heading2:
			return (
				<h2 id={id} key={id}>
					{children.join('')}
				</h2>
			);
		default:
			return null;
	}
};

export { htmlSerializer };
