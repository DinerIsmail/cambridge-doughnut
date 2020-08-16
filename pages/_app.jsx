import Head from 'next/head';
import Layout from '../components/layout';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => (
	<>
		<Head>
			<title>Doughnut Economics Cambridge</title>
			<link rel="icon" href="/favicon.ico" />
			<meta
				name="viewport"
				content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no, viewport-fit=cover"
			/>
			<link
				href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&amp;display=swap"
				rel="stylesheet"
			></link>
			{/* TODO: Add the other meta tags */}
		</Head>
		<Layout>
			<Component {...pageProps} />
		</Layout>
	</>
);

export default App;
