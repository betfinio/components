import type { FC } from 'react';
import * as React from 'react';
import type { IconProps } from './';

const ChainlinkWithIcon: FC<IconProps> = ({ className = '' }) => {
	return (
		<svg width="66" height="20" className={className} viewBox="0 0 66 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<mask id="mask0_1609_4626" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="-1" width="66" height="22">
				<path d="M65.9459 -0.929688H0V20.6919H65.9459V-0.929688Z" fill="white" />
			</mask>
			<g mask="url(#mask0_1609_4626)">
				<path
					d="M22.6382 9.55127C22.6219 9.07018 22.703 8.59451 22.876 8.14586C23.049 7.69721 23.3138 7.2864 23.649 6.94586C23.9841 6.59991 24.3895 6.32424 24.8328 6.14046C25.276 5.95667 25.7571 5.85938 26.2382 5.85938C28.0598 5.85938 29.1355 6.91883 29.4598 8.16748L28.3192 8.55127C28.2165 8.0864 27.9517 7.67559 27.5733 7.3891C27.1895 7.10262 26.7192 6.96208 26.2436 6.99451C25.0652 6.99451 23.8868 7.84856 23.8868 9.57829C23.8868 11.308 25.0382 12.1296 26.2598 12.1296C26.7409 12.1459 27.2111 11.9945 27.5949 11.7134C27.9787 11.4269 28.2598 11.0269 28.3841 10.5675L29.4922 10.9296C29.303 11.6323 28.876 12.2486 28.2868 12.6756C27.6976 13.1026 26.9733 13.3188 26.2436 13.281C25.7571 13.2918 25.2706 13.1999 24.8219 13.0107C24.3733 12.8269 23.9625 12.5513 23.6273 12.1999C23.2868 11.8486 23.0273 11.4378 22.8598 10.9783C22.6868 10.5188 22.6111 10.0323 22.6382 9.55127Z"
					fill="white"
				/>
				<path
					d="M31.6915 13.1028H30.5186V5.83789H31.6915V8.68654C31.8645 8.48654 32.0753 8.32438 32.3186 8.22167C32.5618 8.11357 32.8213 8.06492 33.0861 8.07573C34.2969 8.07573 34.8807 8.94059 34.8807 10.0163V13.1082H33.7456V10.2163C33.7672 10.0757 33.7564 9.92978 33.7132 9.79465C33.6699 9.65951 33.5996 9.53519 33.5023 9.42708C33.405 9.32438 33.2861 9.2433 33.151 9.18924C33.0159 9.13519 32.8753 9.11357 32.7294 9.12438C32.5888 9.12438 32.4483 9.15141 32.3186 9.21086C32.1888 9.26492 32.0753 9.35141 31.978 9.45411C31.8807 9.55681 31.8104 9.68114 31.7618 9.81087C31.7186 9.946 31.6969 10.0865 31.7131 10.2271L31.6915 13.1028Z"
					fill="white"
				/>
				<path
					d="M37.4973 10.3028L38.7568 10.1082C39.0378 10.0704 39.1189 9.92984 39.1189 9.75687C39.1189 9.34606 38.8378 9.01092 38.1892 9.01092C38.0649 9.00011 37.9351 9.01633 37.8162 9.05416C37.6973 9.092 37.5838 9.15687 37.4919 9.23795C37.4 9.31903 37.3189 9.42173 37.2649 9.53525C37.2108 9.64876 37.1784 9.77308 37.1784 9.89741L36.1081 9.65957C36.1946 8.81633 36.9676 8.05957 38.173 8.05957C39.6865 8.05957 40.2649 8.91363 40.2649 9.90822V12.3352C40.2649 12.6001 40.2811 12.8596 40.3243 13.119H39.2324C39.1946 12.9136 39.1784 12.7028 39.1838 12.4974C39.0216 12.7461 38.7946 12.9461 38.5297 13.0812C38.2649 13.2163 37.9676 13.2812 37.6703 13.265C37.4649 13.2812 37.2541 13.2596 37.0541 13.1893C36.8541 13.1244 36.6757 13.0163 36.5189 12.8812C36.3622 12.7461 36.2378 12.5785 36.1459 12.3893C36.0595 12.2001 36.0054 12.0001 36 11.7893C36.0108 10.9028 36.6541 10.4217 37.4973 10.3028ZM39.1189 11.0866V10.865L37.8378 11.0542C37.6649 11.0596 37.4973 11.1298 37.3784 11.2542C37.2541 11.3785 37.1892 11.5461 37.1838 11.719C37.1838 11.8109 37.2054 11.8974 37.2432 11.9785C37.2811 12.0596 37.3351 12.1298 37.4 12.1893C37.4649 12.2488 37.5459 12.292 37.6324 12.319C37.7189 12.3461 37.8108 12.3569 37.8973 12.3461C38.0649 12.3623 38.2378 12.3407 38.3946 12.2812C38.5568 12.2217 38.6973 12.1298 38.8162 12.0055C38.9351 11.8812 39.0216 11.7352 39.0757 11.5731C39.1243 11.4271 39.1405 11.2542 39.1189 11.0866Z"
					fill="white"
				/>
				<path
					d="M42.2538 5.73535C42.3565 5.73535 42.4538 5.75157 42.5511 5.7894C42.6429 5.82724 42.7294 5.8813 42.8051 5.95157C42.8754 6.02184 42.9348 6.10832 42.9727 6.20022C43.0105 6.29211 43.0321 6.39481 43.0321 6.49211C43.0321 6.69211 42.9511 6.8867 42.8105 7.02724C42.67 7.16778 42.4754 7.24886 42.27 7.24886C42.07 7.24886 41.8754 7.16778 41.7294 7.02724C41.5889 6.8867 41.5078 6.69211 41.5078 6.49211C41.5078 6.29211 41.5835 6.10292 41.724 5.96238C41.8646 5.82184 42.0538 5.74076 42.2538 5.73535ZM41.6862 13.1245V8.21643H42.8429V13.1029L41.6862 13.1245Z"
					fill="white"
				/>
				<path
					d="M45.5245 13.1029H44.3516V8.21637H45.4921V8.86502C45.638 8.61637 45.8543 8.41096 46.1083 8.27042C46.3624 8.12988 46.6543 8.05961 46.9462 8.07042C48.1462 8.07042 48.7191 8.93529 48.7191 10.011V13.1029H47.5462V10.211C47.5462 9.61096 47.2705 9.12447 46.5407 9.12447C46.3948 9.12447 46.2489 9.15691 46.1191 9.21637C45.984 9.27583 45.8651 9.36231 45.7732 9.47042C45.6759 9.57853 45.6056 9.70826 45.5624 9.8488C45.5191 9.98934 45.5083 10.1353 45.5245 10.2758V13.1029Z"
					fill="white"
				/>
				<path d="M50.1514 13.1028V5.83789H51.3243V13.1028H50.1514Z" fill="white" />
				<path
					d="M53.4108 5.73535C53.6162 5.73535 53.8108 5.81643 53.9513 5.95697C54.0973 6.09751 54.1784 6.29211 54.1784 6.49751C54.1784 6.64887 54.1297 6.79481 54.0486 6.91913C53.9622 7.04346 53.8432 7.14076 53.7081 7.19481C53.5676 7.24887 53.4162 7.26508 53.2703 7.23805C53.1243 7.21103 52.9892 7.13535 52.8811 7.03265C52.773 6.92454 52.7027 6.79481 52.6703 6.64346C52.6432 6.49751 52.6541 6.34616 52.7135 6.20562C52.773 6.06508 52.8649 5.95157 52.9946 5.86508C53.1135 5.784 53.2595 5.73535 53.4108 5.73535ZM52.8378 13.1245V8.21643H54V13.1029L52.8378 13.1245Z"
					fill="white"
				/>
				<path
					d="M56.6818 13.1029H55.5088V8.21637H56.6493V8.86502C56.7953 8.61637 57.0115 8.41096 57.2655 8.27042C57.5196 8.12988 57.8115 8.05961 58.1034 8.07042C59.3034 8.07042 59.8818 8.93529 59.8818 10.011V13.1029H58.7088V10.211C58.7304 10.0704 58.7196 9.92447 58.6764 9.78934C58.6331 9.6542 58.5628 9.52988 58.4655 9.42177C58.3682 9.31907 58.2493 9.23799 58.1142 9.18393C57.9791 9.12988 57.8385 9.10826 57.6926 9.11907C57.5466 9.11907 57.4007 9.1515 57.2709 9.21096C57.1358 9.27042 57.0223 9.35691 56.925 9.47042C56.8277 9.57853 56.7574 9.70826 56.7142 9.8488C56.6709 9.98934 56.6601 10.1353 56.6764 10.2758V13.1029H56.6818Z"
					fill="white"
				/>
				<path
					d="M63.8811 10.2811L65.946 13.1028H64.5135L63.0703 11.0919L62.4649 11.7244V13.1082H61.3027V5.83789H62.4649V10.1946L64.3514 8.21627H65.9081L63.8811 10.2811Z"
					fill="white"
				/>
				<path
					d="M8.77297 3.8757L13.8324 6.7676V12.573L8.78378 15.4811L3.72432 12.5946V6.78922L8.77297 3.8757ZM8.77297 -0.38916L6.91351 0.68111L1.85405 3.59462L0 4.66489V6.80003V12.6V14.7352L1.85946 15.7946L6.91892 18.6865L8.77838 19.746L10.6378 18.6757L15.6865 15.7622L17.5459 14.6973V12.5622V6.75679V4.62165L15.6865 3.56219L10.627 0.670299L8.76757 -0.38916H8.77297Z"
					fill="#375BD2"
				/>
			</g>
		</svg>
	);
};

export default ChainlinkWithIcon;
