import type { FC } from 'react';
import * as React from 'react';
import type { IconProps } from './';

const PolygonWithIcon: FC<IconProps> = ({ className = '' }) => {
	return (
		<svg width="90" height="20" className={className} viewBox="0 0 90 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<mask id="mask0_1668_5794" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="90" height="20">
				<path d="M89.1633 0H0V20H89.1633V0Z" fill="white" />
			</mask>
			<g mask="url(#mask0_1668_5794)">
				<path
					d="M34.8833 6.36901C35.43 6.70351 35.8948 7.17738 36.1818 7.80455C36.5236 8.43173 36.6876 9.19828 36.6876 10.0345C36.6876 10.8708 36.5236 11.5955 36.1408 12.2227C35.7991 12.8499 35.2933 13.3237 34.6646 13.6164C34.0358 13.9509 33.2703 14.1181 32.4775 14.1181C32.0128 14.1181 31.589 14.0345 31.179 13.8673C30.7552 13.7418 30.3861 13.491 30.0854 13.1983V17.5885H27.6387V6.02058H29.7437L29.9487 6.95438C30.8782 6.20177 31.8897 5.81152 32.9423 5.81152C33.6667 5.82546 34.3365 5.99271 34.8833 6.36901ZM33.53 11.6094C33.9538 11.2331 34.1588 10.7174 34.1588 10.0903C34.1588 9.46309 33.9538 8.94741 33.571 8.52929C33.1883 8.11118 32.6826 7.94393 32.1358 7.94393C31.671 7.94393 31.2473 8.02755 30.9192 8.23661C30.5775 8.40386 30.3315 8.69654 30.1264 9.08678V10.9683C30.2495 11.3446 30.5092 11.6373 30.7962 11.8603C31.1379 12.0694 31.507 12.1948 31.9718 12.1948C32.6142 12.1948 33.12 11.9857 33.53 11.6094Z"
					fill="white"
				/>
				<path
					d="M38.1229 7.84676C38.5057 7.2614 39.0114 6.74572 39.6812 6.41122C40.351 6.07673 41.1165 5.86768 41.9503 5.86768C42.7841 5.86768 43.5495 6.03492 44.2193 6.41122C44.8481 6.74572 45.3539 7.2614 45.7366 7.88858C46.1193 8.51576 46.2834 9.19868 46.2834 9.99311C46.2834 10.7875 46.1193 11.4705 45.7366 12.0976C45.3539 12.7248 44.8891 13.2405 44.2193 13.575C43.5906 13.9095 42.7841 14.1185 41.9503 14.1185C41.1165 14.1185 40.351 13.9513 39.6812 13.6168C39.0114 13.2823 38.5057 12.8084 38.1229 12.1813C37.7812 11.5541 37.5762 10.8293 37.5762 9.99311C37.5762 9.19868 37.7812 8.47394 38.1229 7.84676ZM40.6107 11.5123C40.9524 11.9304 41.4035 12.0976 41.9639 12.0976C42.5107 12.0976 42.9755 11.8886 43.3172 11.5123C43.6589 11.136 43.8229 10.5785 43.8229 9.99311C43.8229 9.36593 43.6589 8.85025 43.3172 8.47394C42.9344 8.05582 42.5244 7.84676 41.9229 7.84676C41.3762 7.84676 40.9524 8.05582 40.5697 8.43213C40.228 8.85025 40.0639 9.36593 40.0639 9.99311C40.0639 10.5924 40.228 11.0942 40.6107 11.5123Z"
					fill="white"
				/>
				<path d="M50.2339 0.0419922V13.9235H47.7871V0.0419922H50.2339Z" fill="white" />
				<path d="M60.253 6.24391L55.2912 17.6307H52.9401L54.7854 13.5331L51.2451 6.22998H54.0199L56.043 10.7875L58.066 6.22998H60.253V6.24391Z" fill="white" />
				<path
					d="M69.6026 6.2442V13.9236C69.6026 14.6344 69.3976 15.3174 68.9738 15.9027C68.5501 16.4881 68.0033 16.962 67.2925 17.2965C66.5817 17.631 65.8163 17.7982 64.9824 17.7982C64.3537 17.7982 63.8069 17.7146 63.3422 17.5892C62.8774 17.4219 62.4947 17.2547 62.2076 17.0874C61.8659 16.8784 61.5378 16.6275 61.1551 16.279L62.5904 14.5926C62.9321 14.9271 63.3011 15.178 63.6429 15.3453C63.9846 15.5125 64.4357 15.6379 64.9414 15.6379C65.5702 15.6379 66.076 15.4707 66.4997 15.178C66.9235 14.8853 67.1285 14.4254 67.1285 13.8679V12.7808C66.8824 13.1571 66.5407 13.4916 66.035 13.7564C65.5292 14.0073 64.9414 14.1327 64.2716 14.1327C63.6019 14.1327 62.9184 13.9655 62.3306 13.5892C61.7429 13.2547 61.2781 12.739 60.8954 12.1118C60.5537 11.4846 60.3486 10.8017 60.3486 10.0491C60.3486 9.29647 60.5127 8.57173 60.8954 7.94455C61.2781 7.31737 61.7429 6.8017 62.3717 6.42539C62.9594 6.04909 63.5882 5.88184 64.2716 5.88184C64.9004 5.88184 65.4472 5.96546 65.9529 6.13271C66.4587 6.29995 66.8414 6.55083 67.0875 6.84351L67.3335 6.25814H69.6026V6.2442ZM67.1148 10.9689V9.07348C66.9508 8.69717 66.6911 8.40448 66.322 8.18149C65.9393 7.97243 65.5292 7.84699 65.0234 7.84699C64.4357 7.84699 63.9299 8.05605 63.5062 8.43236C63.0824 8.80866 62.8774 9.32435 62.8774 9.95152C62.8774 10.5369 63.0824 11.0944 63.5062 11.5125C63.9299 11.9306 64.4357 12.1397 65.0234 12.1397C65.9803 12.1118 66.6911 11.7355 67.1148 10.9689Z"
					fill="white"
				/>
				<path
					d="M71.6122 7.84659C71.9949 7.21941 72.5007 6.74555 73.1705 6.36924C73.8403 6.03475 74.6057 5.82568 75.4395 5.82568C76.287 5.82568 77.0388 5.99293 77.7086 6.36924C78.3374 6.70374 78.8431 7.21941 79.2259 7.84659C79.5676 8.47377 79.7726 9.1567 79.7726 9.95112C79.7726 10.7595 79.6086 11.4285 79.2259 12.0556C78.8841 12.6828 78.3784 13.1985 77.7086 13.533C77.0798 13.8675 76.2733 14.0766 75.4395 14.0766C74.592 14.0766 73.8403 13.9093 73.1705 13.5748C72.5007 13.2403 71.9949 12.7665 71.6122 12.1393C71.2295 11.5121 71.0654 10.7874 71.0654 9.90931C71.0654 9.19851 71.2431 8.47377 71.6122 7.84659ZM74.059 11.5121C74.4007 11.9302 74.8518 12.0975 75.4122 12.0975C75.9589 12.0975 76.4237 11.8884 76.7654 11.5121C77.1071 11.1358 77.2712 10.5783 77.2712 9.99293C77.2712 9.36576 77.1071 8.85007 76.7654 8.47377C76.4237 8.09746 75.9726 7.88841 75.4122 7.88841C74.8654 7.88841 74.4417 8.09746 74.059 8.47377C73.6762 8.85007 73.5122 9.40757 73.5122 9.99293C73.5532 10.5922 73.7172 11.094 74.059 11.5121Z"
					fill="white"
				/>
				<path
					d="M88.4116 6.49485C88.9174 6.91297 89.1224 7.47046 89.1634 8.13945V13.9234H86.6756V9.07325C86.6346 8.32064 86.2519 7.93039 85.5411 7.93039C84.9943 7.93039 84.5296 8.18126 84.1879 8.73875C83.8461 9.28231 83.6821 9.96523 83.6821 10.7597V13.9234H81.2354V6.24398H83.4634L83.6274 7.47046C83.9282 6.96872 84.2972 6.57848 84.803 6.28579C85.3087 5.99311 85.8965 5.86768 86.5663 5.86768C87.3181 5.86768 87.9469 6.07673 88.4116 6.49485Z"
					fill="white"
				/>
				<path
					d="M17.2094 6.11856C16.7856 5.86769 16.2389 5.86769 15.7741 6.11856L12.4935 8.05584L10.2655 9.32413L6.98489 11.2614C6.56115 11.5123 6.01439 11.5123 5.54964 11.2614L2.93885 9.74225C2.51511 9.49138 2.22806 9.03145 2.22806 8.51577V5.53319C2.22806 5.03145 2.4741 4.55758 2.93885 4.30671L5.50863 2.82936C5.93237 2.57849 6.47914 2.57849 6.94388 2.82936L9.51367 4.30671C9.93741 4.55758 10.2245 5.01751 10.2245 5.53319V7.47048L12.4525 6.16037V4.22308C12.4525 3.72134 12.2065 3.24748 11.7417 2.99661L6.98489 0.209149C6.56115 -0.0417217 6.01439 -0.0417217 5.54964 0.209149L0.710793 2.99661C0.246045 3.24748 0 3.70741 0 4.22308V9.83982C0 10.3416 0.246045 10.8154 0.710793 11.0663L5.54964 13.8538C5.97338 14.1046 6.52014 14.1046 6.98489 13.8538L10.2655 11.9583L12.4935 10.6482L15.7741 8.7527C16.1978 8.50183 16.7446 8.50183 17.2094 8.7527L19.7791 10.2301C20.2029 10.4809 20.4899 10.9409 20.4899 11.4565V14.4531C20.4899 14.9548 20.2439 15.4287 19.7791 15.6795L17.2094 17.1987C16.7856 17.4496 16.2389 17.4496 15.7741 17.1987L13.2043 15.7213C12.7806 15.4705 12.4935 15.0105 12.4935 14.4949V12.5576L10.2655 13.8677V15.805C10.2655 16.3067 10.5115 16.7806 10.9763 17.0314L15.8151 19.8189C16.2388 20.0698 16.7856 20.0698 17.2504 19.8189L22.0892 17.0314C22.5129 16.7806 22.8 16.3207 22.8 15.805V10.1882C22.8 9.68651 22.554 9.21263 22.0892 8.96176L17.2094 6.11856Z"
					fill="#8247E5"
				/>
			</g>
		</svg>
	);
};

export default PolygonWithIcon;
