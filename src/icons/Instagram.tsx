import type { FC } from 'react';

import type { IconProps } from './';

const Instagram: FC<IconProps> = ({ className }) => {
	return (
		<svg width="16" height="16" className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="12.1446" cy="3.89188" r="0.96" fill="currentColor" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4 8C4 10.206 5.794 12 8 12C10.206 12 12 10.206 12 8C12 5.794 10.206 4 8 4C5.794 4 4 5.794 4 8ZM6 8C6 6.897 6.897 6 8 6C9.103 6 10 6.897 10 8C10 9.103 9.103 10 8 10C6.897 10 6 9.103 6 8Z"
				fill="currentColor"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4 16H12C14.056 16 16 14.056 16 12V4C16 1.944 14.056 0 12 0H4C1.944 0 0 1.944 0 4V12C0 14.056 1.944 16 4 16ZM2 4C2 3.065 3.065 2 4 2H12C12.935 2 14 3.065 14 4V12C14 12.935 12.935 14 12 14H4C3.047 14 2 12.953 2 12V4Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default Instagram;
