import React from 'react';

import { ProgressiveImage } from '../../../../components';
import { ImageType } from '../../../../model';
import styles from './styles.module.scss';

interface TileProps {
	img: ImageType;
	title: string;
	description: string;
}

export default function Tile(props: TileProps) {
	const { img, title, description } = props;
	return (
		<div className={styles.sectionWrapper}>
			<div className={styles.section}>
				<ProgressiveImage className={styles.image} src={img} />
				<div className={styles.overlay}>
					<h1 className='title'>{title}</h1>
					<p className='text'>{description}</p>
				</div>
			</div>
		</div>
	);
}
