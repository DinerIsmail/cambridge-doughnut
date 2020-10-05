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
				property="og:description"
				content="We envisage a world with an economy that operates within the Earth’s capacity, protects the natural environment and meets the social and economic needs of all people."
			/>
			<meta property="og:locale" content="en_GB" />
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content="Cambridge Doughnut" />
			<meta property="fb:pages" content="112921467211265" />
			<meta
				name="twitter:url"
				content="https://cambridgedoughnut.org.uk"
			/>
			<meta name="twitter:site" content="@camdoughnut" />
			<meta
				property="article:publisher"
				content="https://www.facebook.com/camdoughnut"
			/>
			<meta
				name="description"
				content="We envisage a world with an economy that operates within the Earth’s capacity, protects the natural environment and meets the social and economic needs of all people."
			/>
			<meta
				name="keywords"
				content="Doughnut economics, circular economy, Cambridge, community, economy, equality, climate crisis"
			/>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, minimum-scale=1, user-scalable=yes, viewport-fit=cover"
			/>
			<script id="mcjs">
				!function(c,h,i,m,p)
				{
					((m = c.createElement(h)),
					(p = c.getElementsByTagName(h)[0]),
					(m.async = 1),
					(m.src = i),
					p.parentNode.insertBefore(m, p))
				}
				(document,"script","https://chimpstatic.com/mcjs-connected/js/users/66c0c9599ca6c7cc0fa5495ed/f1cff002b42b334a8eaa49d98.js");
			</script>
		</Head>
		<Layout>
			<Component {...pageProps} />
		</Layout>
	</>
);

export default withGA('UA-177228108-1', Router)(App);
