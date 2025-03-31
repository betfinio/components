import type { FC } from 'react';

import type { IconProps } from './';

const Close: FC<IconProps> = ({ className = 'text-[#ffffff]', onClick }) => {
	return (
		<svg width="16" height="16" className={className} viewBox="0 0 16 16" onClick={onClick} fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M7.66667 14.3333C11.3486 14.3333 14.3333 11.3486 14.3333 7.66667C14.3333 3.98477 11.3486 1 7.66667 1C3.98477 1 1 3.98477 1 7.66667C1 11.3486 3.98477 14.3333 7.66667 14.3333Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path d="M9.66699 5.66675L5.66699 9.66675" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M5.66699 5.66675L9.66699 9.66675" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
};

export default Close;
