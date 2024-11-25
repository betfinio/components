import type { FC } from 'react';
import * as React from 'react';
import type { IconProps } from './';

const Diamonds: FC<IconProps> = ({ className = 'text-[#6A6F84]' }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" className={className}>
			<path
				d="M3.41061 4.08052C2.45239 4.8946 1.29928 5.51986 0 5.99897C3.06954 6.91658 4.91082 9.06852 6.00099 12C6.19994 11.3666 6.43544 10.7738 6.71356 10.2257C7.81795 8.18339 9.67755 6.85568 12 6.001C10.7007 5.52393 9.54761 4.89866 8.58939 4.08256C7.44035 3.01269 6.60398 1.62612 5.99901 0C5.39606 1.62409 4.55966 3.01065 3.41061 4.08052Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default Diamonds;
