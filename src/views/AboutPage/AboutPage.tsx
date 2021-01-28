import React, { Component } from 'react';

import { Head, SmallHeader } from '../../components';
import { ImageTile, VideoTile } from './components';
import { SEO, ImageType } from '../../model';
import styles from './styles.module.scss';

interface AboutPageProps {
	data: {
		seo: SEO | null;
		title: string;
		cover_image: {
			original: ImageType;
			medium: ImageType;
			small: ImageType;
		};
		goals: Array<{
			id: number;
			title: string;
			description: string;
		}>;
		image_tiles: Array<{
			id: number;
			title: string;
			description: string;
			image: {
				medium: ImageType;
				small: ImageType;
			};
		}>;
		video_tile: {
			id: number;
			title: string;
			description: string;
			url: string;
		};
	};
}

class AboutPage extends Component<AboutPageProps> {
	state = {
		imageHeight: 0,
	};

	setHeight = (height: number) => this.setState({ imageHeight: height });

	render() {
		const { seo, cover_image, title, image_tiles, video_tile, goals } = this.props.data;
		return (
			<>
				<Head seo={seo} />
				<SmallHeader cover_image={cover_image.original} title={title} />
				<main className={styles.container}>
					<div className={styles.tileWrapper}>
						<ImageTile
							image={image_tiles[0].image.medium}
							title={image_tiles[0].title}
							description={image_tiles[0].description}
							onHeight={this.setHeight}
						/>
						<VideoTile
							video={video_tile.url}
							title={video_tile.title}
							description={video_tile.description}
							height={this.state.imageHeight}
						/>
						<ImageTile
							image={image_tiles[1].image.medium}
							title={image_tiles[1].title}
							description={image_tiles[1].description}
						/>
					</div>
				</main>
			</>
		);
	}
}

export default AboutPage;
