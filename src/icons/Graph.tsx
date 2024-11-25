import type { FC } from 'react';
import * as React from 'react';
import type { IconProps } from './';

const Graph: FC<IconProps> = ({ className = '', onClick = () => undefined }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={className} onClick={onClick} width="18" height="18" viewBox="0 0 18 18" fill="none">
			<path
				d="M5.86845 11.655H0.792572V17H5.86845V11.655ZM5.86845 11.655L8.7927 9.52093M8.7927 6.34484V9.52093M8.7927 9.52093L11.7123 11.655M6.25444 1H11.3303V6.34502H6.25444V1ZM16.7926 16.9998H11.7167V11.6548H16.7926V16.9998Z"
				stroke="white"
				strokeWidth="1.5"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default Graph;
