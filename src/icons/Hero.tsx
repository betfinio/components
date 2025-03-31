import type { FC } from 'react';

import type { IconProps } from './';

const Hero: FC<IconProps> = ({ className = 'text-[#6A6F84]' }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox={'0 0 2600 172'} className={className}>
			<path
				d="M2531.32 50.47l-1218.3 120.51c-8.66.846-17.38.846-26.04 0L68.698 50.47C29.101 46.55 0 25.611 0 1.02V0h2600v1.02c.01 24.591-29.1 45.53-68.68 49.45z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default Hero;
