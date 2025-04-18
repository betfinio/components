import type { FC } from 'react';

import type { IconProps } from './';

const Twitter: FC<IconProps> = ({ className }) => {
	return (
		<svg width="16" height="13" viewBox="0 0 16 13" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M16 1.5C15.4 1.8 14.8 1.9 14.1 2C14.8 1.6 15.3 1 15.5 0.2C14.9 0.6 14.2 0.8 13.4 1C12.8 0.4 11.9 0 11 0C9.3 0 7.8 1.5 7.8 3.3C7.8 3.6 7.8 3.8 7.9 4C5.2 3.9 2.7 2.6 1.1 0.6C0.8 1.1 0.7 1.6 0.7 2.3C0.7 3.4 1.3 4.4 2.2 5C1.7 5 1.2 4.8 0.7 4.6C0.7 6.2 1.8 7.5 3.3 7.8C3 7.9 2.7 7.9 2.4 7.9C2.2 7.9 2 7.9 1.8 7.8C2.2 9.1 3.4 10.1 4.9 10.1C3.8 11 2.4 11.5 0.8 11.5C0.5 11.5 0.3 11.5 0 11.5C1.5 12.4 3.2 13 5 13C11 13 14.3 8 14.3 3.7C14.3 3.6 14.3 3.4 14.3 3.3C15 2.8 15.6 2.2 16 1.5Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default Twitter;
