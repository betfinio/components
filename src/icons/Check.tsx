import type { FC } from 'react';

import type { IconProps } from './';

const Check: FC<IconProps> = ({ className = '' }) => {
	return (
		<svg width="12" height="9" viewBox="0 0 12 9" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M10.2807 0.280712L3.98771 6.57371L1.69471 4.28071C1.30233 3.90174 0.678627 3.90716 0.292893 4.29289C-0.0928404 4.67863 -0.0982602 5.30233 0.280712 5.69471L3.28071 8.69471C3.67121 9.08509 4.30421 9.08509 4.69471 8.69471L11.6947 1.69471C12.0737 1.30233 12.0683 0.678627 11.6825 0.292893C11.2968 -0.0928404 10.6731 -0.0982602 10.2807 0.280712Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default Check;
