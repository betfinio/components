import type { FC } from 'react';
import * as React from 'react';
import type { IconProps } from './';

const ChevronRight: FC<IconProps> = ({ className = '' }) => {
	return (
		<svg width="16" height="17" className={className} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M6 12.5L10 8.5L6 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
};

export default ChevronRight;
