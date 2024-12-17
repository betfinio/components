import type { FC } from 'react';
import * as React from 'react';
import type { IconProps } from './';

const Letter: FC<IconProps> = ({ className = '' }) => {
	return (
		<svg width="16" height="16" className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M10.205 2.81327H5.79297L7.38274 1.91246C7.76502 1.69585 8.23294 1.69585 8.61522 1.91246L10.205 2.81327Z" fill="currentColor" />
			<path d="M1.85938 5.31936L2.8739 6.04309V4.5L2.38266 4.74563C2.1478 4.87871 1.96671 5.08136 1.85938 5.31936Z" fill="currentColor" />
			<path d="M13.6163 4.74563C13.8511 4.87871 14.0321 5.08136 14.1395 5.31936L13.125 6.04309V4.5L13.6163 4.74563Z" fill="currentColor" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12.625 6.399V4.5625C12.625 3.87215 12.0654 3.3125 11.375 3.3125H4.625C3.93465 3.3125 3.375 3.87215 3.375 4.5625V6.399L7.56444 9.3876C7.82506 9.57351 8.17495 9.57352 8.43556 9.3876L8.70206 9.19749C8.63464 9.15476 8.56404 9.11234 8.48996 9.06991C8.30324 8.96299 8.31136 8.67914 8.5009 8.57729C9.12673 8.24099 9.5035 7.83801 9.88762 7.14714C9.98924 6.96439 10.2603 6.965 10.3619 7.14771C10.4881 7.37446 10.6137 7.56866 10.7467 7.7389L12.625 6.399ZM5.875 5.31251C5.875 5.17444 5.98693 5.06251 6.125 5.06251H9.6875C9.82557 5.06251 9.9375 5.17444 9.9375 5.31251C9.9375 5.45059 9.82557 5.56251 9.6875 5.56251H6.125C5.98693 5.56251 5.875 5.45059 5.875 5.31251ZM6.125 6.93751C5.98693 6.93751 5.875 7.04944 5.875 7.18751C5.875 7.32559 5.98693 7.43751 6.125 7.43751H8.6875C8.82557 7.43751 8.9375 7.32559 8.9375 7.18751C8.9375 7.04944 8.82557 6.93751 8.6875 6.93751H6.125Z"
				fill="currentColor"
			/>
			<path
				d="M9.1287 9.50883C9.44019 9.77151 9.67238 10.0674 9.88548 10.4531C9.98863 10.6398 10.2682 10.6429 10.3729 10.4571C10.7377 9.80911 11.119 9.42208 11.7518 9.06618C11.94 8.96029 11.9365 8.67503 11.7469 8.57174C11.4939 8.43401 11.2798 8.28646 11.088 8.11112L14.25 5.85547V12.939C14.25 13.6293 13.6904 14.189 13 14.189H3C2.30965 14.189 1.75 13.6293 1.75 12.939V5.85547L7.27408 9.79616C7.70843 10.106 8.29158 10.106 8.72593 9.79616L9.1287 9.50883Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default Letter;