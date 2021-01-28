import React from 'react';

import useProgressiveImg from './useProgressiveImg';
import { ImageType } from '../../model';

interface ProgressiveImageInnerProps {
	src: ImageType;
	clientWidth: number;
	className?: string;
}

const placeholder =
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=';

export default function ProgressiveImageInner(props: ProgressiveImageInnerProps) {
	const [src, blur] = useProgressiveImg(placeholder, props.src.url);

	const style = (blur as boolean)
		? {
				filter: 'blur(3px)',
				opacity: '0.5',
				transition: 'none',
				height: props.clientWidth / (props.src.width / props.src.height),
		  }
		: {
				filter: 'none',
				transition: 'filter 0.3s ease-out',
				height: props.clientWidth / (props.src.width / props.src.height),
		  };

	return <img className={props.className} src={src as string} style={style} />;
}
