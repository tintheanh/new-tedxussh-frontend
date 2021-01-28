import React from 'react';

import styles from './styles.module.scss';

export default function VideoTile({
	video,
	title,
	description,
	height,
}: {
	video: string;
	title: string;
	description: string;
	height: number;
}) {
	return (
		<div className={styles.sectionWrapper}>
			<div className={styles.video} style={{ height }}>
				<iframe
					style={{ width: '100%', height: '100%' }}
					src={`https://www.youtube.com/embed/${video.split('?v=').pop()!}`}
					frameBorder='0'
				/>
			</div>
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	);
}
