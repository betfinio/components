import type { FC } from 'react';
import * as React from 'react';
import type { IconProps } from './';

const Menu: FC<IconProps> = ({ className = 'text-[#6A6F84]', onClick = () => undefined }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={onClick}>
			<path d="M21 10H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M21 6H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M21 14H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M21 18H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
};

export default Menu;
