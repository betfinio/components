import type { FC } from 'react';
import * as React from 'react';
import type { IconProps } from './';

const Clubs: FC<IconProps> = ({ className = 'text-[#6A6F84]' }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none" className={className}>
			<path
				d="M9.21593 5.08186C7.05574 1.81074 4.98305 0 4.98305 0C4.98305 0 2.91045 1.81271 0.750248 5.08186C-1.30146 8.18765 1.15949 11.4784 4.45593 8.784C4.06005 9.85666 3.47949 10.9293 2.71438 12C4.23889 10.9864 5.7634 10.9864 7.28601 12C6.51138 10.9391 5.92899 9.87832 5.53692 8.81943C9.02559 11.7579 11.2696 8.19159 9.21593 5.08186Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default Clubs;
