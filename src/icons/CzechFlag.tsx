import type { FC } from 'react';

import type { IconProps } from './';

const CzechFlag: FC<IconProps> = ({ className = '' }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			width="80px"
			height="80px"
			viewBox="0 0 64 64"
			aria-hidden="true"
			role="img"
			preserveAspectRatio="xMidYMid meet"
		>
			<path d="M10.8 10.8V32H62C62 15.4 48.6 2 32 2c-8.3 0-15.8 3.4-21.2 8.8" fill="#f9f9f9" />
			<path d="M10.8 32v21.2C16.2 58.6 23.7 62 32 62c16.6 0 30-13.4 30-30H10.8" fill="#ed4c5c" />
			<path d="M10.8 10.8C5.4 16.2 2 23.7 2 32s3.4 15.8 8.8 21.2L32 32L10.8 10.8z" fill="#428bc1" />
		</svg>
	);
};

export default CzechFlag;
