import { useState, useEffect } from 'react';

export default function useProgressiveImg(lowQualitySrc: string, highQualitySrc: string) {
	const [src, setSrc] = useState(lowQualitySrc);

	useEffect(() => {
		setSrc(lowQualitySrc);
		const img = new Image();
		img.src = highQualitySrc;
		img.onload = () => {
			setSrc(highQualitySrc);
		};
	}, [lowQualitySrc, highQualitySrc]);

	return [src, src === lowQualitySrc];
}
