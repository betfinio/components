import type { FC } from 'react';

import type { IconProps } from './';

const Coinmarketcap: FC<IconProps> = ({ className = 'text-[#ECF1F9]' }) => {
	return (
		<svg width="30" height="31" viewBox="0 0 30 31" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_1668_5760)">
				<path
					d="M26.0873 18.5234C25.8498 18.6899 25.5727 18.7882 25.2849 18.8079C24.9972 18.8276 24.7096 18.7679 24.4524 18.6351C23.8487 18.2879 23.5233 17.4737 23.5233 16.3641V12.9636C23.5233 11.3311 22.8881 10.1697 21.8257 9.85438C20.0301 9.31956 18.6892 11.5586 18.1717 12.4008L14.9961 17.6333V11.2473C14.9608 9.77456 14.4903 8.89249 13.6004 8.62907C13.0123 8.45346 12.1302 8.5253 11.2716 9.85838L4.17146 21.4609C3.22676 19.6209 2.73693 17.5742 2.74438 15.498C2.74438 8.50534 8.23314 2.81782 14.9961 2.81782C21.759 2.81782 27.2674 8.50534 27.2674 15.498V15.5339C27.2674 15.5339 27.2674 15.5579 27.2674 15.5698C27.334 16.9229 26.9028 18.0005 26.0912 18.5234H26.0873ZM30.0078 15.502V15.4341C29.953 6.91284 23.241 0 14.9961 0C6.75118 0 0 6.95275 0 15.498C0 24.0433 6.72765 31 14.9961 31C18.7883 30.9998 22.4363 29.52 25.1895 26.8651C25.4567 26.6087 25.614 26.2556 25.6272 25.882C25.6404 25.5085 25.5085 25.1447 25.2601 24.8694C25.1412 24.7356 24.9974 24.627 24.8372 24.5498C24.6769 24.4727 24.5032 24.4286 24.3261 24.4201C24.149 24.4116 23.9721 24.4388 23.8053 24.5001C23.6386 24.5615 23.4855 24.6558 23.3547 24.7777C22.1693 25.9223 20.769 26.8113 19.2378 27.3913C17.7066 27.9713 16.076 28.2303 14.444 28.1528C12.812 28.0752 11.2122 27.6627 9.74069 26.9401C8.26918 26.2175 6.95627 25.1995 5.88082 23.9475L12.2713 13.4904V18.3158C12.2713 20.6347 13.1534 21.3851 13.8944 21.6046C14.6354 21.8241 15.7684 21.6725 16.9564 19.7088L20.4848 13.8935C20.5946 13.7059 20.7005 13.5463 20.7946 13.4066V16.3641C20.7946 18.5314 21.6492 20.2636 23.1469 21.1177C23.8279 21.4919 24.5953 21.6728 25.3685 21.6412C26.1418 21.6096 26.8925 21.3667 27.5418 20.9381C29.1884 19.8485 30.0863 17.8768 29.9922 15.502H30.0078Z"
					fill="currentColor"
				/>
			</g>
			<defs>
				<clipPath id="clip0_1668_5760">
					<rect width="30" height="31" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default Coinmarketcap;
