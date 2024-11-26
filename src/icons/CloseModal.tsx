import type { FC } from 'react';
import * as React from 'react';
import type { IconProps } from './';

const CloseModal: FC<IconProps> = ({ className = '', onClick }) => {
	return (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg">
			<path
				d="M7.66667 14.6676C11.3486 14.6676 14.3333 11.6828 14.3333 8.00089C14.3333 4.319 11.3486 1.33423 7.66667 1.33423C3.98477 1.33423 1 4.319 1 8.00089C1 11.6828 3.98477 14.6676 7.66667 14.6676Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path d="M9.66669 6.00098L5.66669 10.001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M5.66669 6.00098L9.66669 10.001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
};

export default CloseModal;
