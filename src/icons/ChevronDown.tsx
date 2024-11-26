import type { FC } from 'react';
import * as React from 'react';
import type { IconProps } from './';

const ChevronDown: FC<IconProps> = ({ className = '' }) => {
	return (
		<svg width="12" height="12" viewBox="0 0 12 12" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="12" height="12" fill="#131624" />
			<path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
};

export default ChevronDown;
