import type { FC } from 'react';

import type { IconProps } from './';

const VolumeArrow: FC<IconProps> = ({ className = '' }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={className} width="48" height="48" viewBox="0 0 48 48" fill="none">
			<path
				d="M38.878 19.8101H41.714C42.0786 19.8092 42.4398 19.8803 42.7768 20.0194C43.1138 20.1584 43.4201 20.3627 43.6779 20.6205C43.9358 20.8782 44.1402 21.1844 44.2793 21.5214C44.4185 21.8584 44.4898 22.2195 44.489 22.5841V25.4201C44.4899 25.7848 44.4188 26.1461 44.2796 26.4831C44.1405 26.8202 43.9361 27.1265 43.6783 27.3844C43.4204 27.6423 43.1141 27.8466 42.777 27.9858C42.4399 28.1249 42.0787 28.196 41.714 28.1951H38.878C37.413 28.1951 36.22 27.0701 36.004 25.6371L24.808 25.6401V39.0631L36.006 39.0841C36.203 37.6511 37.404 36.4721 38.882 36.4721H41.719C42.0835 36.4713 42.4446 36.5425 42.7815 36.6817C43.1184 36.8208 43.4245 37.0251 43.6823 37.2828C43.94 37.5406 44.1443 37.8467 44.2834 38.1836C44.4226 38.5205 44.4938 38.8816 44.493 39.2461V42.0821C44.4939 42.4467 44.4228 42.8079 44.2837 43.1449C44.1447 43.4819 43.9404 43.7882 43.6826 44.046C43.4249 44.3039 43.1187 44.5083 42.7817 44.6475C42.4447 44.7867 42.0836 44.8579 41.719 44.8571H38.882C37.408 44.8571 36.21 43.6961 36.006 42.2601L21.531 42.2721V25.6401H9.65198L15.7 31.6551L11.028 31.6921L3.28198 24.0061C5.86398 21.4431 8.45198 18.8821 11.037 16.3201L15.709 16.3121L9.59298 22.3591H21.53V5.73211L36.007 5.73811C36.207 4.54511 37.496 3.15711 38.815 3.14411C39.567 3.13711 40.463 3.15711 41.722 3.14411C42.0866 3.14319 42.4478 3.2143 42.7848 3.35337C43.1218 3.49244 43.4281 3.69672 43.6859 3.95448C43.9438 4.21224 44.1481 4.5184 44.2873 4.85538C44.4265 5.19236 44.4978 5.55352 44.497 5.91811V8.75411C44.4979 9.11879 44.4268 9.48005 44.2876 9.81715C44.1485 10.1542 43.9441 10.4605 43.6863 10.7184C43.4284 10.9763 43.1221 11.1806 42.785 11.3198C42.4479 11.4589 42.0867 11.53 41.722 11.5291H38.886C37.411 11.5291 36.196 10.3891 35.992 8.93911L24.807 8.94111V22.3591L36.002 22.3771C36.205 20.9471 37.403 19.8091 38.877 19.8091L38.878 19.8101Z"
				stroke="#FFC800"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	);
};

export default VolumeArrow;
