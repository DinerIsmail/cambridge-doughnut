import Head from 'next/head';
import withGA from 'next-ga';
import Router from 'next/router';
import Layout from '../components/layout';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => (
	<>
		<Head>
			<meta charSet="utf-8" />
			<link
				rel="icon"
				type="image/ico"
				sizes="16x16"
				href="static/favicon.ico"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
				rel="stylesheet"
			/>
			<link rel="canonical" href="https://cambridgedoughnut.org.uk/" />
			<meta name="theme-color" content="#2b8186" />
			<meta
				property="og:image"
				content="https://images.prismic.io/cambridgedoughnut/7375626c-7665-4d4e-8a8f-1192483eceb6_og-image.jpg?auto=compress,format"
			/>
			<meta
				property="og:description"
				content="Our aim is to promote an economy based on doughnut principles in Cambridge, and to facilitate its introduction by empowering individuals and organisations with the knowledge they need to co-create a more socially and ecologically just city."
			/>
			<meta property="og:locale" content="en_GB" />
			<meta property="og:type" content="website" />
			<meta
				property="og:url"
				content="https://cambridgedoughnut.org.uk"
			/>
			<meta property="og:site_name" content="Cambridge Doughnut" />
			{/* <meta property="fb:pages" content="343548653105695" /> */}
			<meta
				name="twitter:url"
				content="https://cambridgedoughnut.org.uk"
			/>
			{/* <meta name="twitter:site" content="@TODO" /> */}
			{/* <meta
				property="article:publisher"
				content="https://www.facebook.com/"
			/> */}
			<meta
				name="description"
				content="Our aim is to promote an economy based on doughnut principles in Cambridge, and to facilitate its introduction by empowering individuals and organisations with the knowledge they need to co-create a more socially and ecologically just city."
			/>
			<meta
				name="keywords"
				content="Doughnut economics, circular economy, Cambridge, community, economy, equality, climate crisis"
			/>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, minimum-scale=1, user-scalable=yes, viewport-fit=cover"
			/>
		</Head>
		<Layout>
			<Component {...pageProps} />
		</Layout>
	</>
);

export default withGA('UA-177228108-1', Router)(App);
