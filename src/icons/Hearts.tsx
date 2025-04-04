import type { FC } from 'react';

import type { IconProps } from './';

const Hearts: FC<IconProps> = ({ className = 'text-[#6A6F84]' }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none" className={className}>
			<path
				d="M5.01639 1.62036C1.21893 -2.23362 -1.37594 1.57497 0.783846 4.87346C2.94363 8.17195 5.01639 10 5.01639 10C5.01639 10 7.08917 8.17195 9.24895 4.87346C11.4105 1.57497 8.56846 -1.92864 5.01639 1.62036Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default Hearts;
