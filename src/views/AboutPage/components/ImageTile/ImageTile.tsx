import React, { useRef } from 'react';

import { ProgressiveImage } from '../../../../components';
import ProgressiveImageOnHeight from './ProgressiveImageOnHeight';
import { ImageType } from '../../../../model';
import styles from './styles.module.scss';

export default function ImageTile({
	image,
	title,
	description,
	onHeight,
}: {
	image: ImageType;
	title: string;
	description: string;
	onHeight?: (height: number) => void;
}) {
	const divRef = useRef<HTMLDivElement>() as React.RefObject<HTMLDivElement>;

	const onSize = (size: any) => {
		if (size.height !== null && size.height > 0 && onHeight !== undefined) {
			onHeight(size.height);
		}
	};

	const renderImage = () => {
		if (onHeight !== undefined) {
			return <ProgressiveImageOnHeight className={styles.image} src={image} onSize={onSize} />;
		}

		return <ProgressiveImage className={styles.image} src={image} />;
	};

	return (
		<div className={styles.sectionWrapper} ref={divRef}>
			{renderImage()}
			<div className={styles.textWrapper}>
				<h1 className={`${styles.title} title`}>{title}</h1>
				<p className={`${styles.text} text`}>{description}</p>
			</div>
		</div>
	);
}
