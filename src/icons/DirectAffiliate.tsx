import type { FC } from 'react';
import * as React from 'react';
import type { IconProps } from './';

const DirectAffiliate: FC<IconProps> = ({ className = 'text-[#6A6F84]' }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" className={className} fill="none">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2.62347 11.8313C2.83391 9.61275 4.7051 7.875 6.97835 7.875C7.6486 7.875 8.28385 8.02594 8.85172 8.29588C9.07003 8.39956 9.33122 8.30638 9.43491 8.0885C9.5386 7.87019 9.44541 7.609 9.22753 7.50575C8.54547 7.18156 7.78291 7 6.97835 7C4.2501 7 2.00528 9.086 1.75197 11.7486C1.72922 11.9893 1.90597 12.2028 2.14616 12.2255C2.38678 12.2487 2.60028 12.0719 2.62347 11.8313Z"
				fill="currentColor"
			/>
			<path
				d="M6.97852 7C8.42826 7 9.60352 5.82475 9.60352 4.375C9.60352 2.92525 8.42826 1.75 6.97852 1.75C5.52877 1.75 4.35352 2.92525 4.35352 4.375C4.35352 5.82475 5.52877 7 6.97852 7Z"
				fill="currentColor"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10.752 10.0623H9.1875C8.946 10.0623 8.75 10.2583 8.75 10.4998C8.75 10.7413 8.946 10.9373 9.1875 10.9373H10.7546L10.2629 11.4291C10.0918 11.6001 10.0918 11.8771 10.2629 12.0477C10.4335 12.2188 10.7109 12.2188 10.8815 12.0477L12.1188 10.8105C12.2898 10.6398 12.2898 10.3625 12.1188 10.1918L10.8815 8.95414C10.7109 8.78352 10.4335 8.78352 10.2629 8.95414C10.0918 9.1252 10.0918 9.40214 10.2629 9.5732L10.752 10.0623Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default DirectAffiliate;
