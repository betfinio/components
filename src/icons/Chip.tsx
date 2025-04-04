import millify from 'millify';
import type { FC } from 'react';

import { cn } from '../lib/utils';

const Chip: FC<{ className?: string; value: number; fontSize: number; labelClassName: string }> = ({ className = '', value, labelClassName, fontSize = 6 }) => {
	return (
		<div className={className}>
			<svg xmlns="http://www.w3.org/2000/svg" className={'w-full h-full'} width="154" height="154" viewBox="0 0 154 154" fill="none">
				<path
					d="M77.0001 154C119.526 154 154 119.526 154 77C154 34.4741 119.526 0 77.0001 0C34.4741 0 0 34.4741 0 77C0 119.526 34.4741 154 77.0001 154Z"
					fill="#131624"
				/>
				<path
					d="M76.9988 124.309C103.127 124.309 124.308 103.128 124.308 77C124.308 50.8723 103.127 29.6914 76.9988 29.6914C50.8708 29.6914 29.6899 50.8723 29.6899 77C29.6899 103.128 50.8708 124.309 76.9988 124.309Z"
					fill="currentColor"
				/>
				<path
					d="M77.0006 1.33809C118.654 1.39289 152.377 35.2059 152.321 76.8608C152.265 118.515 118.454 152.238 76.7995 152.182C35.1449 152.126 1.42239 118.314 1.47817 76.6597C1.51878 46.3828 19.6597 19.0649 47.5499 7.28322C56.8661 3.34012 66.8835 1.31774 77.0006 1.33809ZM77.0006 0C34.4707 0 0 34.4699 0 76.9994C0 119.53 34.4707 154 77.0006 154C119.53 154 154 119.526 154 76.9994C154 34.4729 119.526 0 77.0006 0Z"
					fill="currentColor"
				/>
				<path
					d="M77.0004 18.0427C109.458 18.0854 135.735 44.4332 135.692 76.8915C135.648 109.35 109.302 135.627 76.8438 135.583C44.3856 135.54 18.1084 109.193 18.1518 76.7348C18.1835 53.1425 32.3192 31.8558 54.0519 22.6752C61.3112 19.6027 69.117 18.0268 77.0004 18.0427ZM77.0004 17C43.8603 17 17 43.8597 17 76.9995C17 110.14 43.8603 137 77.0004 137C110.14 137 137 110.137 137 76.9995C137 43.862 110.138 17 77.0004 17Z"
					fill="currentColor"
				/>

				<path
					d="M78.6353 62.4966C77.4511 62.4922 75.849 62.4823 73.9157 62.4553L71.6624 68.6357H76.4193L78.6353 62.4966ZM72.4412 68.0906L74.2952 63.0053C75.4942 63.0207 76.6894 63.0317 77.8603 63.0378L76.0404 68.0906H72.4412Z"
					fill="currentColor"
				/>
				<path d="M68.6223 70.9082L69.6316 70.9049L70.2839 69.1152H69.2691L68.6223 70.9082Z" fill="currentColor" />
				<path
					d="M66.4412 70.9203L67.7766 70.9148L68.4261 69.1152H67.0929C66.8757 69.7175 66.659 70.3192 66.4412 70.9203ZM67.4741 69.6603H67.6495L67.3921 70.3714H67.2167L67.4741 69.6603Z"
					fill="currentColor"
				/>
				<path
					d="M70.8367 70.9026H72.3332C73.5729 70.9026 74.6614 70.9054 75.5991 70.9114L76.2454 69.1206H71.4868L70.8367 70.9026ZM71.8696 69.6624H75.4715L75.2185 70.3636C74.2841 70.3592 73.3155 70.357 72.3349 70.357H71.6171L71.8696 69.6624Z"
					fill="currentColor"
				/>
				<path
					d="M86.51 67.9602C86.2603 68.1714 85.9886 68.3557 85.701 68.5113C85.025 68.8765 84.3353 69.0327 82.8124 69.113C82.3663 69.1361 81.8532 69.1532 81.2812 69.1532C80.806 69.1532 80.2906 69.1416 79.739 69.113L79.0889 70.9154C80.7086 70.8741 82.2442 70.6701 83.8959 69.8352C84.86 69.3506 85.7417 68.7181 86.51 67.9602ZM79.8776 70.3373L80.1157 69.6784C80.5046 69.6933 80.8945 69.701 81.2812 69.701C81.8004 69.701 82.3251 69.6872 82.841 69.6597L82.9939 69.6515C81.8911 70.1019 80.8566 70.2708 79.8776 70.3373Z"
					fill="currentColor"
				/>
				<path
					d="M82.5682 68.6346C83.8882 68.5565 84.5658 68.5098 85.3369 68.1523C85.9122 67.8872 86.9896 67.3905 87.2652 66.3472C87.599 65.0778 86.5073 63.9151 86.301 63.6995C85.3072 62.644 83.9294 62.4444 83.0241 62.4444C82.7211 62.4433 82.4191 62.4658 82.1194 62.5131L79.9111 68.633C80.3005 68.6566 80.746 68.6731 81.2399 68.6731C81.6497 68.6748 82.0946 68.6627 82.5682 68.6346ZM82.5176 63.0125C82.6551 63.0004 82.8272 62.99 83.023 62.99C83.8711 62.99 85.0591 63.1781 85.9028 64.074C86.2306 64.4183 86.9676 65.3264 86.7355 66.2091C86.5287 67.0044 85.6383 67.4142 85.1081 67.6556C84.4398 67.9642 83.8684 68.0093 82.5363 68.0885C82.1062 68.1138 81.6695 68.127 81.2383 68.127C81.0513 68.127 80.8621 68.127 80.6734 68.1193L82.5176 63.0125Z"
					fill="currentColor"
				/>
				<path d="M80.9188 62.501C80.5795 62.501 80.2192 62.501 79.837 62.501L77.6238 68.6357H78.7067L80.9188 62.501Z" fill="currentColor" />
				<path d="M77.8795 70.9258L78.5324 69.1152H77.4489L76.7993 70.9165L77.2734 70.9203L77.8795 70.9258Z" fill="currentColor" />
				<path
					d="M53.5122 22.1719C60.974 19.0035 68.9127 17.3993 77.1082 17.3993V6.06892e-05H76.9988C66.5933 -0.0130261 56.294 2.09051 46.7271 6.18255L53.5122 22.1719Z"
					fill="currentColor"
				/>
				<path
					d="M114.393 9.67871L106.383 24.119C113.487 28.0518 119.725 33.3747 124.726 39.7708L137.687 29.6064C131.329 21.4768 123.409 14.7013 114.393 9.67871Z"
					fill="currentColor"
				/>
				<path
					d="M137.575 77.0434C137.577 81.7278 137.04 86.3967 135.971 90.9568L151.951 94.7144C154.306 84.6747 154.634 74.2665 152.915 64.0986L136.722 66.8404C137.291 70.2124 137.576 73.6252 137.575 77.0434Z"
					fill="currentColor"
				/>
				<path
					d="M134.557 128.141L122.293 117.224C116.905 123.293 110.35 128.215 103.018 131.693L110.076 146.547C119.383 142.108 127.707 135.849 134.557 128.141Z"
					fill="currentColor"
				/>
				<path
					d="M43.385 146.291C52.6691 150.803 62.7693 153.392 73.0791 153.902L73.9283 137.425C65.8394 137.022 57.9156 134.981 50.6386 131.425L43.385 146.291Z"
					fill="currentColor"
				/>
				<path
					d="M2.06592 94.7638C4.43326 104.777 8.79253 114.211 14.8841 122.504L27.964 113.102C23.2273 106.533 19.8743 99.0698 18.1076 91.1663L2.06592 94.7638Z"
					fill="currentColor"
				/>
				<path
					d="M2.64136 56.9492L18.8786 61.4999C21.0614 53.6966 24.8042 46.4176 29.8805 40.1021L16.4893 29.3772C10.054 37.5358 5.34344 46.9156 2.64136 56.9492Z"
					fill="currentColor"
				/>
				<path
					d="M53.5122 22.1719C60.974 19.0035 68.9127 17.3993 77.1082 17.3993V6.06892e-05H76.9988C66.5933 -0.0130261 56.294 2.09051 46.7271 6.18255L53.5122 22.1719Z"
					fill="currentColor"
				/>
			</svg>
			<span className={cn('absolute left-1/2 -translate-y-1/2 -translate-x-1/2 text-white font-bold', labelClassName)} style={{ fontSize: `${fontSize}px` }}>
				{millify(value)}
			</span>
		</div>
	);
};

export default Chip;
