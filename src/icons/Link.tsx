import type { FC } from 'react';

import type { IconProps } from './';

const LinkIcon: FC<IconProps> = ({ className = '' }) => {
	return (
		<svg width="29" height="29" className={className} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_1668_5746)">
				<path
					d="M15.3205 18.8562L13.5527 20.624C13.1658 21.0109 12.7065 21.3178 12.2009 21.5272C11.6954 21.7366 11.1536 21.8444 10.6064 21.8444C9.50135 21.8444 8.44155 21.4054 7.66015 20.624C6.87874 19.8426 6.43976 18.7828 6.43976 17.6777C6.43976 16.5727 6.87874 15.5129 7.66014 14.7315L9.42791 12.9637"
					stroke="black"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M11.785 10.6066L13.5528 8.83888C13.9397 8.45197 14.399 8.14505 14.9045 7.93566C15.4101 7.72626 15.9519 7.61849 16.499 7.61849C17.6041 7.61849 18.6639 8.05748 19.4453 8.83888C20.2267 9.62028 20.6657 10.6801 20.6657 11.7852C20.6657 12.8902 20.2267 13.95 19.4453 14.7314L17.6776 16.4992"
					stroke="black"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path d="M11.7852 16.499L16.4992 11.785" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			</g>
			<defs>
				<clipPath id="clip0_1668_5746">
					<rect width="20" height="20" fill="white" transform="translate(0 14.1421) rotate(-45)" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default LinkIcon;
