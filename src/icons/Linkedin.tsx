import type { FC } from 'react';

import type { IconProps } from './';

const LinkedIn: FC<IconProps> = ({ className }) => {
	return (
		<svg width="17" height="16" viewBox="0 0 17 16" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0.7 0H15.3C15.7 0 16 0.3 16.1 0.7V15.3C16.1 15.7 15.8 16 15.4 16H0.7C0.3 16 0 15.7 0 15.4V0.7C0 0.3 0.3 0 0.7 0ZM2.40039 13.6H4.70039H4.80039V6H2.40039V13.6ZM3.6 5C2.8 5 2.2 4.3 2.2 3.6C2.2 2.8 2.8 2.2 3.6 2.2C4.4 2.2 5 2.8 5 3.6C4.9 4.3 4.3 5 3.6 5ZM11.2 13.6H13.5V9.4C13.5 7.4 13.1 5.8 10.7 5.8C9.6 5.8 8.8 6.4 8.5 7V6H6.2V13.7H8.6V9.9C8.6 8.9 8.8 7.9 10 7.9C11.2 7.9 11.2 9 11.2 9.9V13.6Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default LinkedIn;
