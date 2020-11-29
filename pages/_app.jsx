import { useCallback } from 'react';
import ReactGA from 'react-ga';
import Head from 'next/head';
import { useRouter } from 'next/router';
import CookieConsent from 'react-cookie-consent';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
	const { pathname } = useRouter();
	ReactGA.pageview(pathname);

	const acceptCookie = useCallback(() => {
		ReactGA.initialize('UA-177228108-1');
	}, []);

	return (
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
				<meta name="theme-color" content="#2b8186" />
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
				<CookieConsent
					buttonStyle={{
						backgroundColor: '#2b8186',
						color: 'white',
						fontSize: '13px',
						padding: '6px 20px',
					}}
					buttonText="Accept cookies"
					cookieName="CookieConsent2"
					expires={150}
					location="bottom"
					onAccept={acceptCookie}
					style={{ background: '#2B373B' }}
				>
					We use cookies to improve user experience, and analyse
					website traffic. By clicking “Accept cookies”, you consent
					to store on your device all the technologies described in
					our{' '}
					<a
						href="https://cambridgedoughnut.org.uk/cookie-policy"
						rel="noreferrer"
						style={{ textDecoration: 'underline' }}
						target="_blank"
					>
						Cookie policy
					</a>
					.
				</CookieConsent>
			</Layout>
		</>
	);
};

App.propTypes = {
	Component: PropTypes.any.isRequired,
	pageProps: PropTypes.any.isRequired,
};

export default App;
