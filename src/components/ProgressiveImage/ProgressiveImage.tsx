import React, { useState, useRef, useEffect } from 'react';

import ProgressiveImageInner from './ProgressiveImageInner';
import { ImageType } from '../../model';

interface ProgressiveImageProps {
	src: ImageType;
	className?: string;
}

export default function ProgressiveImage(props: ProgressiveImageProps) {
	const divRef = useRef<HTMLDivElement>() as React.RefObject<HTMLDivElement>;
	const [divWidth, setDivWidth] = useState(0);

	useEffect(() => {
		if (divRef.current) {
			setDivWidth(divRef.current.clientWidth);
		}
	}, []);

	return (
		<div ref={divRef}>
			<ProgressiveImageInner {...props} clientWidth={divWidth} />
		</div>
	);
}
