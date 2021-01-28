import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

interface HeadProps {
	seo: {
		title: string;
		description: string;
		canonical: string;
		site_name: string;
		url: string;
		image: {
			width: number;
			height: number;
			url: string;
		} | null;
	} | null;
}

export default function MyHead(props: HeadProps) {
	const { seo } = props;

	if (seo) {
		return (
			<Head>
				<title>{seo.title}</title>
				<NextSeo
					title={seo.title}
					description={seo.description}
					canonical={seo.canonical}
					openGraph={{
						url: seo.url,
						title: seo.title,
						description: seo.description,
						images: seo.image
							? [
									{
										width: seo.image.width,
										height: seo.image.height,
										url: seo.image.url,
									},
							  ]
							: [],
						site_name: seo.site_name,
					}}
					twitter={{
						handle: '@handle',
						site: '@site',
						cardType: 'summary_large_image',
					}}
				/>
			</Head>
		);
	}

	return (
		<Head>
			<title>TEDxHCMUSSH </title>
		</Head>
	);
}
