import React from 'react';
import fetch from 'node-fetch';

import { HomePage } from '../src/views';

export default function Index(props: any) {
	return <HomePage data={props.data} />;
}

export async function getStaticProps() {
	const server = process.env.SERVER;
	const res = await fetch(`${server}/home`, { method: 'GET' });
	const data = await res.json();
	const { cover_image, seo, tiles } = data;
	const fetchedTiles = tiles.map((tile: any) => ({
		...tile,
		image: {
			medium: {
				alt: tile.image.alternativeText,
				url: tile.image.formats.medium.url,
				width: tile.image.formats.medium.width,
				height: tile.image.formats.medium.height,
			},
			small: {
				alt: tile.image.alternativeText,
				url: tile.image.formats.small.url,
				width: tile.image.formats.small.width,
				height: tile.image.formats.small.height,
			},
		},
	}));

	return {
		props: {
			data: {
				title: data.title,
				description: data.description,
				cover_image: {
					original: {
						alt: cover_image.alternativeText,
						url: cover_image.url,
						width: cover_image.width,
						height: cover_image.height,
					},
					medium: {
						alt: cover_image.alternativeText,
						url: cover_image.formats.medium.url,
						width: cover_image.formats.medium.width,
						height: cover_image.formats.medium.height,
					},
					small: {
						alt: cover_image.alternativeText,
						url: cover_image.formats.small.url,
						width: cover_image.formats.small.width,
						height: cover_image.formats.small.height,
					},
				},
				seo: seo
					? {
							title: seo.title ?? '',
							description: seo.description ?? '',
							canonical: seo.canonical ?? '',
							site_name: seo.site_name ?? '',
							url: seo.url ?? '',
							image: seo.image
								? {
										width: seo.image.width,
										height: seo.image.height,
										url: seo.image.url,
								  }
								: null,
					  }
					: null,
				tiles: fetchedTiles,
			},
		},
	};
}
