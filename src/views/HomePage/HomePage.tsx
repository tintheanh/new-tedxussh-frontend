import React, { Component } from 'react';

import { Head } from '../../components';
import { Header, Tile } from './components';
import { SEO, ImageType } from '../../model';
import styles from './styles.module.scss';

interface HomePageProps {
	data: {
		seo: SEO | null;
		title: string;
		description: string;
		cover_image: {
			original: ImageType;
			medium: ImageType;
			small: ImageType;
		};
		tiles: Array<{
			id: number;
			title: string;
			description: string;
			image: {
				medium: ImageType;
				small: ImageType;
			};
		}>;
	};
}

interface HomePageState {
	viewportWidth: number;
}

class HomePage extends Component<HomePageProps, HomePageState> {
	state = {
		viewportWidth: 0,
	};

	componentDidMount() {
		this.updateViewportWidth();
		window.addEventListener('resize', this.updateViewportWidth);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateViewportWidth);
	}

	updateViewportWidth = () => {
		this.setState({ viewportWidth: window.innerWidth });
	};

	getCoverImage = () => {
		const { viewportWidth } = this.state;
		const { cover_image } = this.props.data;
		let img: ImageType;

		if (viewportWidth >= 1024) {
			img = cover_image.original;
		} else if (viewportWidth > 414 && viewportWidth < 1024) {
			img = cover_image.medium;
		} else {
			img = cover_image.small;
		}

		return img;
	};

	renderTiles = () => {
		const { viewportWidth } = this.state;
		const { tiles } = this.props.data;
		let processedData = [];

		if (viewportWidth > 414) {
			processedData = tiles.map((tile) => ({ ...tile, image: tile.image.medium }));
		} else {
			processedData = tiles.map((tile) => ({ ...tile, image: tile.image.small }));
		}

		return (
			<>
				{processedData.map((tile) => (
					<Tile key={tile.id} img={tile.image} title={tile.title} description={tile.description} />
				))}
			</>
		);
	};

	render() {
		const { data } = this.props;
		return (
			<>
				<Head seo={data.seo} />
				<Header
					cover_image={this.getCoverImage()}
					title={data.title}
					description={data.description}
				/>
				<main className={styles.container}>{this.renderTiles()}</main>
			</>
		);
	}
}

export default HomePage;
