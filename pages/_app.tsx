import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import 'nprogress/nprogress.css';

import { NavBar, Footer } from '../src/components';

const TopProgressBar = dynamic(
	() => {
		return import('../src/components/TopProgressBar');
	},
	{ ssr: false }
);

function MyApp({ Component, pageProps }: { Component: React.FC; pageProps: any }) {
	return (
		<>
			<Head>
				<link rel='stylesheet' href='/css/normalize.css' />
				<link rel='stylesheet' href='/css/reset.css' />
				<link rel='stylesheet' href='/css/global.css' />
			</Head>
			<TopProgressBar />
			<NavBar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
