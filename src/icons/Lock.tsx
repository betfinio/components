import type { FC } from 'react';

import type { IconProps } from './';

const Lock: FC<IconProps> = ({ className = '' }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={className} width="20" height="20" viewBox="0 0 20 20" fill="none">
			<path
				d="M15.8333 9.16663H4.16667C3.24619 9.16663 2.5 9.91282 2.5 10.8333V16.6666C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6666V10.8333C17.5 9.91282 16.7538 9.16663 15.8333 9.16663Z"
				stroke="#FFC800"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5.83334 9.16663V5.83329C5.83334 4.72822 6.27233 3.66842 7.05373 2.88701C7.83513 2.10561 8.89494 1.66663 10 1.66663C11.1051 1.66663 12.1649 2.10561 12.9463 2.88701C13.7277 3.66842 14.1667 4.72822 14.1667 5.83329V9.16663"
				stroke="#FFC800"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default Lock;
