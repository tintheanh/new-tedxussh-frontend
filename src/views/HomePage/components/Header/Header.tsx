import React from 'react';
import Link from 'next/link';

import { ProgressiveImage } from '../../../../components';
import { ImageType } from '../../../../model';
import styles from './styles.module.scss';

interface HeaderProps {
	title: string;
	description: string;
	cover_image: ImageType;
}

export default function Header(props: HeaderProps) {
	const { cover_image, title, description } = props;
	return (
		<header className={styles.cover}>
			<ProgressiveImage className={styles.image} src={cover_image} />
			<div className={styles.introductionWrapper}>
				<div className={styles.introduction}>
					<h1 className={`${styles.title} title`}>{title}</h1>
					<p className={`${styles.description} text`}>{description}</p>
					<Link href='/'>
						<a className={`${styles.explore} text`}>Khám phá sự kiện</a>
					</Link>
				</div>
			</div>
		</header>
	);
}
