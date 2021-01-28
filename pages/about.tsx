import React from 'react';

import { AboutPage } from '../src/views';

export default function About(props: any) {
	return <AboutPage data={props.data} />;
}

export async function getStaticProps() {
	const server = process.env.SERVER;
	const res = await fetch(`${server}/about`, { method: 'GET' });
	const data = await res.json();

	const imageTiles = data.image_tiles.map((tile: any) => ({
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
				cover_image: {
					original: {
						alt: data.cover_image.alternativeText,
						url: data.cover_image.url,
						width: data.cover_image.width,
						height: data.cover_image.height,
					},
					medium: {
						alt: data.cover_image.alternativeText,
						url: data.cover_image.formats.medium.url,
						width: data.cover_image.formats.medium.width,
						height: data.cover_image.formats.medium.height,
					},
					small: {
						alt: data.cover_image.alternativeText,
						url: data.cover_image.formats.small.url,
						width: data.cover_image.formats.small.width,
						height: data.cover_image.formats.small.height,
					},
				},
				goals: data.goals,
				image_tiles: imageTiles,
				video_tile: {
					...data.video_tile,
					url: data.video_tile.video_url,
				},
				seo: data.seo
					? {
							title: data.seo.title ?? '',
							description: data.seo.description ?? '',
							canonical: data.seo.canonical ?? '',
							site_name: data.seo.site_name ?? '',
							url: data.seo.url ?? '',
							image: data.seo.image
								? {
										width: data.seo.image.width,
										height: data.seo.image.height,
										url: data.seo.image.url,
								  }
								: null,
					  }
					: null,
			},
		},
	};
}
