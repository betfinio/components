import type { FC } from 'react';
import * as React from 'react';
import type { IconProps } from './';

const Bank: FC<IconProps> = ({ className = '' }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" className={className} viewBox="0 0 36 36" fill="none">
			<rect opacity="0.5" x="4" y="8" width="28" height="20" fill="#0F121D" />
			<path
				d="M9.94336 28.4785L7.69336 28.4785L7.69336 29.9215C7.70039 30.491 7.87617 30.8777 8.22773 31.1027C8.49492 31.2645 8.54414 31.2715 9.94336 31.2715C11.2652 31.2715 11.4059 31.2574 11.6309 31.1309C11.9824 30.927 12.1934 30.477 12.1934 29.9215L12.1934 28.4785L9.94336 28.4785Z"
				fill="white"
			/>
			<path
				d="M26.25 28.4785L24 28.4785L24 29.9215C24.007 30.491 24.1828 30.8777 24.5344 31.1027C24.8016 31.2645 24.8508 31.2715 26.25 31.2715C27.5719 31.2715 27.7125 31.2574 27.9375 31.1309C28.2891 30.927 28.5 30.477 28.5 29.9215L28.5 28.4785L26.25 28.4785Z"
				fill="white"
			/>
			<path d="M14.9062 7.75V8.875H19.6172H24.3281V7.75V6.625H19.6172H14.9062V7.75Z" fill="currentColor" />
			<path d="M5.0625 13.375V15.625H5.55469H6.04688V13.375V11.125H5.55469H5.0625V13.375Z" fill="currentColor" />
			<path d="M5.0625 22.375V24.625H5.69531H6.32812V22.375V20.125H5.69531H5.0625V22.375Z" fill="currentColor" />
			<path d="M14.9062 28V29.125H19.6172H24.3281V28V26.875H19.6172H14.9062V28Z" fill="currentColor" />
			<path
				d="M3.38915 6.74449C3.17822 6.84293 2.80556 7.25777 2.92509 7.25777C2.94619 7.25777 2.93212 7.29996 2.88994 7.34918C2.83369 7.41949 2.81962 10.2882 2.83369 17.9523L2.84775 28.464L3.02353 28.682C3.40322 29.1461 3.07275 29.125 9.28134 29.125H14.9063V28V26.875H10.3782H5.85712L5.61806 26.7132C5.4915 26.6289 5.30869 26.4461 5.22431 26.3195L5.06259 26.0804V17.875V9.66949L5.22431 9.43043C5.30869 9.30387 5.4915 9.12105 5.61806 9.03668L5.85712 8.87496H10.3782H14.9063V7.74996V6.62496H9.26728C4.21181 6.62496 3.60009 6.63902 3.38915 6.74449Z"
				fill="currentColor"
			/>
			<path
				d="M6.04688 13.375V15.625H6.48984C7.05937 15.618 7.44609 15.4422 7.67109 15.0906C7.83281 14.8234 7.83984 14.7742 7.83984 13.375C7.83984 12.0531 7.82578 11.9125 7.69922 11.6875C7.49531 11.3359 7.04531 11.125 6.48984 11.125H6.04688V13.375Z"
				fill="currentColor"
			/>
			<path
				d="M6.32812 22.375V24.625H6.63047C7.05937 24.618 7.47422 24.407 7.67109 24.0906C7.83281 23.8234 7.83984 23.7742 7.83984 22.375C7.83984 21.0531 7.82578 20.9125 7.69922 20.6875C7.51641 20.3781 7.03828 20.125 6.63047 20.125H6.32812V22.375Z"
				fill="currentColor"
			/>
			<path
				d="M24.3281 7.74998V8.87498H27.218C30.0305 8.87498 30.1148 8.88202 30.375 9.02264C30.5227 9.10702 30.7055 9.28983 30.7898 9.43748L30.9375 9.70467V17.875V26.0453L30.7898 26.3125C30.7055 26.4601 30.5227 26.643 30.375 26.7273C30.1148 26.868 30.0305 26.875 27.218 26.875H24.3281V28V29.125H28.3922C32.3156 29.125 32.4563 29.118 32.6812 28.9844C32.8078 28.907 32.9695 28.7453 33.0469 28.6187C33.1875 28.3867 33.1875 28.239 33.1875 17.875C33.1875 7.51092 33.1875 7.36327 33.0469 7.13124C32.9695 7.00467 32.8078 6.84295 32.6812 6.76561C32.4563 6.63202 32.3156 6.62498 28.3922 6.62498H24.3281V7.74998Z"
				fill="currentColor"
			/>
			<circle cx="18" cy="18" r="7" fill="currentColor" />
			<path
				d="M18.1492 21C17.6805 21 17.2714 20.8761 16.9202 20.6317C16.5691 20.3873 16.3136 20.0602 16.1521 19.6558C15.9922 19.2513 15.9577 18.8141 16.0518 18.3442L16.9751 13.6179C17.0017 13.4492 17.0785 13.3046 17.2055 13.1824C17.3325 13.062 17.4971 13 17.6978 13C17.8514 13 17.9893 13.0447 18.1085 13.1325C18.2292 13.2203 18.3154 13.3339 18.3687 13.4733C18.422 13.6127 18.4314 13.759 18.3985 13.9139L18.0771 15.5559H18.458L17.9972 15.7762C18.0771 15.6437 18.1837 15.5267 18.3185 15.4234C18.4518 15.3201 18.5991 15.2444 18.7606 15.1928C18.9205 15.1411 19.0914 15.1153 19.2716 15.1153C19.6463 15.1153 19.9771 15.2427 20.2655 15.4957C20.5524 15.7487 20.7624 16.0843 20.8925 16.5043C21.0226 16.9225 21.0352 17.3597 20.927 17.8158L20.6856 19.0052C20.5978 19.401 20.4348 19.7504 20.1934 20.0516C19.952 20.3528 19.6573 20.5852 19.3046 20.7504C18.9534 20.9157 18.5678 20.9983 18.1461 20.9983L18.1492 21ZM18.2496 19.6661C18.4173 19.6661 18.5709 19.6282 18.7104 19.5508C18.8499 19.4733 18.9722 19.3649 19.0772 19.2255C19.1807 19.0861 19.2497 18.9243 19.2826 18.7401L19.5036 17.5835C19.5444 17.37 19.535 17.1773 19.4786 17.0052C19.4221 16.833 19.3296 16.6954 19.2027 16.5921C19.0757 16.4888 18.9221 16.4372 18.7418 16.4372C18.5819 16.4372 18.4314 16.4768 18.2903 16.5577C18.1492 16.6386 18.0301 16.7487 17.9298 16.8881C17.8294 17.0275 17.762 17.1893 17.7291 17.3735L17.5081 18.5301C17.4673 18.7367 17.4736 18.926 17.5238 19.1033C17.5739 19.2788 17.6633 19.4165 17.7902 19.5164C17.9172 19.6162 18.0708 19.6644 18.2511 19.6644L18.2496 19.6661Z"
				fill="#0F121D"
			/>
			<path
				d="M15.0733 21.0144C15.4782 21.4512 15.9386 21.7733 16.4376 21.9875C16.935 22.2016 17.4659 22.3061 17.9986 22.3079C18.5312 22.3079 19.0621 22.2033 19.5595 21.9875C20.0585 21.7733 20.5189 21.4512 20.9238 21.0144C20.9406 20.9955 20.9675 20.9955 20.986 21.0126C20.9995 21.0246 21.0028 21.0435 20.9978 21.0589C20.7961 21.6448 20.3542 22.1485 19.8166 22.486C19.2772 22.8252 18.637 23 18.0002 23C17.3634 23 16.7233 22.8252 16.1839 22.486C15.6462 22.1502 15.2043 21.6465 15.0027 21.0589C14.9943 21.0366 15.0061 21.0109 15.0296 21.0024C15.0464 20.9972 15.0649 21.0024 15.075 21.0144H15.0733Z"
				fill="#0F121D"
			/>
		</svg>
	);
};

export default Bank;
