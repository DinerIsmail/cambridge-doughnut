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
			<link
				href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
				rel="stylesheet"
			/>
			<meta charSet="utf-8" />
			<link rel="canonical" href="https://cambridgedoughnut.org.uk/" />
			{/* <meta
				property="og:image"
				content="static/images/generic-social-media-share.png"
			/> */}
			<meta property="og:title" content="Cambridge Doughnut" />
			<meta property="og:description" content="TODO" />
			<meta property="og:locale" content="en_GB" />
			<meta property="og:type" content="website" />
			<meta
				property="og:url"
				content="https://cambridgedoughnut.org.uk"
			/>
			<meta property="og:site_name" content="Cambridge Doughnut" />
			{/* <meta property="fp:pages" content="343548653105695" /> */}
			<meta
				name="twitter:url"
				content="https://cambridgedoughnut.org.uk"
			/>
			{/* <meta name="twitter:site" content="@xr_eoe" /> */}
			{/* <meta
				property="article:publisher"
				content="https://www.facebook.com/"
			/> */}
			<meta name="description" content="TODO" />
			<meta
				name="keywords"
				content="Doughnut economics, circular economy, Cambridge, community, economy, equality, climate crisis"
			/>
			<meta
				name="viewport"
				content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no, viewport-fit=cover"
			/>
		</Head>
		<Layout>
			<Component {...pageProps} />
		</Layout>
	</>
);

export default App;
