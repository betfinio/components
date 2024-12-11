import type { FC } from 'react';
import * as React from 'react';
import type { IconProps } from './';

const MoneyUp: FC<IconProps> = ({ className = 'text-[#6A6F84]' }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={className} width="20" height="20" viewBox="0 0 20 20" fill="none">
			<g clipPath="url(#clip0_1445_8431)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M5.81949 14.2841V11.6872C6.00018 11.7339 6.16867 11.8191 6.31346 11.9368C6.45825 12.0546 6.57593 12.2022 6.65848 12.3696C6.69756 12.4481 6.76625 12.508 6.84944 12.5359C6.93263 12.5638 7.02351 12.5575 7.10207 12.5184C7.18064 12.4794 7.24046 12.4107 7.26838 12.3275C7.29629 12.2443 7.29002 12.1534 7.25094 12.0748C7.11385 11.7966 6.91254 11.555 6.66365 11.37C6.41475 11.1849 6.1254 11.0617 5.81949 11.0105V10.5322C5.81949 10.4445 5.78464 10.3603 5.7226 10.2983C5.66056 10.2363 5.57641 10.2014 5.48867 10.2014C5.40093 10.2014 5.31679 10.2363 5.25475 10.2983C5.19271 10.3603 5.15785 10.4445 5.15785 10.5322V11.0111C4.70004 11.0891 4.28458 11.3266 3.98503 11.6815C3.68547 12.0364 3.52115 12.4858 3.52115 12.9502C3.52115 13.4146 3.68547 13.864 3.98503 14.2189C4.28458 14.5738 4.70004 14.8113 5.15785 14.8893V17.4862C4.97719 17.4394 4.80874 17.3542 4.66396 17.2365C4.51918 17.1187 4.40148 16.9712 4.31887 16.8038C4.2793 16.7262 4.21069 16.6673 4.12794 16.6399C4.04519 16.6126 3.95499 16.619 3.87695 16.6578C3.7989 16.6966 3.73931 16.7646 3.71113 16.847C3.68295 16.9295 3.68845 17.0198 3.72645 17.0982C3.86351 17.3764 4.0648 17.6181 4.31369 17.8032C4.56258 17.9883 4.85194 18.1115 5.15785 18.1627V18.6406C5.15785 18.7284 5.19271 18.8125 5.25475 18.8745C5.31679 18.9366 5.40093 18.9714 5.48867 18.9714C5.57641 18.9714 5.66056 18.9366 5.7226 18.8745C5.78464 18.8125 5.81949 18.7284 5.81949 18.6406V18.1617C6.27726 18.0837 6.69267 17.8463 6.99219 17.4915C7.29171 17.1366 7.45601 16.6872 7.45601 16.2229C7.45601 15.7585 7.29171 15.3091 6.99219 14.9542C6.69267 14.5994 6.27726 14.362 5.81949 14.284V14.2841ZM4.18309 12.9503C4.1835 12.6617 4.27931 12.3813 4.4556 12.1528C4.6319 11.9243 4.87879 11.7605 5.15785 11.6868V14.2132C4.87883 14.1397 4.63195 13.9759 4.45565 13.7475C4.27935 13.5191 4.18352 13.2388 4.18309 12.9503ZM5.81949 17.4862V14.9599C6.09873 15.0331 6.34584 15.1967 6.5222 15.4253C6.69855 15.6538 6.7942 15.9344 6.7942 16.223C6.7942 16.5117 6.69855 16.7922 6.5222 17.0208C6.34584 17.2493 6.09873 17.413 5.81949 17.4862ZM5.48867 20C2.50356 20 0.0751953 17.5718 0.0751953 14.5865C0.0751953 11.6012 2.50356 9.17301 5.48867 9.17301C8.47379 9.17301 10.9022 11.6016 10.9022 14.5865C10.9022 17.5714 8.47379 20 5.48867 20ZM17.0581 16.5945C17.0578 16.2586 16.9242 15.9366 16.6867 15.6991C16.4492 15.4616 16.1272 15.3279 15.7913 15.3276H11.5188C11.4086 16.2303 11.0957 17.0965 10.6037 17.8613H15.7912C16.1271 17.8609 16.4491 17.7274 16.6866 17.4899C16.9241 17.2524 17.0577 16.9304 17.0581 16.5945ZM19.2666 13.3989C19.2664 13.7348 19.1328 14.0568 18.8954 14.2944C18.6579 14.5319 18.3359 14.6655 18.0001 14.6659H11.563C11.563 14.6394 11.5638 14.613 11.5638 14.5865C11.5647 13.76 11.3959 12.9422 11.068 12.1836C11.1826 12.1498 11.3014 12.1325 11.4209 12.1323H18.0001C18.3359 12.1327 18.6579 12.2663 18.8953 12.5038C19.1328 12.7412 19.2663 13.0632 19.2666 13.3991V13.3989ZM11.4209 11.4705H15.5561C15.7225 11.4705 15.8872 11.4377 16.0409 11.3741C16.1946 11.3104 16.3343 11.2171 16.452 11.0994C16.5696 10.9818 16.6629 10.8421 16.7266 10.6884C16.7903 10.5347 16.823 10.3699 16.823 10.2036C16.823 10.0372 16.7903 9.87243 16.7266 9.71871C16.6629 9.565 16.5696 9.42533 16.452 9.30768C16.3343 9.19004 16.1946 9.09671 16.0409 9.03304C15.8872 8.96937 15.7225 8.9366 15.5561 8.9366H8.97742C8.71394 8.93631 8.45703 9.01887 8.24305 9.17262C9.30183 9.71427 10.1798 10.5528 10.7694 11.5856C10.9783 11.5098 11.1987 11.4709 11.4209 11.4705H11.4209ZM18.6575 8.27492H15.5719C15.5701 8.27492 15.5684 8.27531 15.5664 8.27531C15.5631 8.27531 15.5598 8.27492 15.5561 8.27492H12.0786C11.7439 8.27306 11.4234 8.13877 11.1874 7.90139C10.9513 7.66401 10.8188 7.34284 10.8188 7.00807C10.8188 6.67329 10.9513 6.35212 11.1874 6.11474C11.4234 5.87736 11.7439 5.74307 12.0786 5.74121H18.6575C18.8244 5.74028 18.9899 5.77237 19.1444 5.83562C19.2989 5.89887 19.4394 5.99204 19.5578 6.10977C19.6762 6.2275 19.7702 6.36747 19.8343 6.52163C19.8984 6.67579 19.9314 6.84111 19.9314 7.00807C19.9314 7.17503 19.8984 7.34034 19.8343 7.4945C19.7702 7.64866 19.6762 7.78863 19.5578 7.90637C19.4394 8.0241 19.2989 8.11726 19.1444 8.18051C18.9899 8.24376 18.8244 8.27585 18.6575 8.27492ZM4.25645 7.60894H6.7209C6.76435 7.60896 6.80738 7.60041 6.84752 7.58379C6.88767 7.56718 6.92415 7.54281 6.95487 7.51209C6.9856 7.48136 7.00997 7.44489 7.02659 7.40475C7.04322 7.3646 7.05177 7.32157 7.05176 7.27812V4.2973H7.98457C8.04482 4.29726 8.10391 4.28077 8.15547 4.24962C8.20703 4.21846 8.24912 4.17382 8.27718 4.12051C8.30524 4.0672 8.31821 4.00724 8.3147 3.94709C8.31119 3.88695 8.29134 3.82891 8.25727 3.77922L5.7616 0.143554C5.73121 0.0992906 5.6905 0.0630907 5.64298 0.0380802C5.59547 0.0130696 5.54258 0 5.48889 0C5.43519 0 5.38231 0.0130696 5.33479 0.0380802C5.28728 0.0630907 5.24657 0.0992906 5.21617 0.143554L2.72008 3.77922C2.68601 3.82891 2.66615 3.88696 2.66264 3.9471C2.65913 4.00725 2.67211 4.06721 2.70018 4.12053C2.72824 4.17384 2.77033 4.21848 2.8219 4.24963C2.87347 4.28078 2.93256 4.29727 2.99281 4.2973H3.92566V7.27812C3.92565 7.32157 3.9342 7.36459 3.95082 7.40473C3.96744 7.44487 3.99181 7.48134 4.02252 7.51206C4.05324 7.54278 4.08971 7.56715 4.12985 7.58377C4.16998 7.6004 4.213 7.60895 4.25645 7.60894Z"
					fill="currentColor"
				/>
			</g>
			<defs>
				<clipPath id="clip0_1445_8431">
					<rect width="20" height="20" fill="currentColor" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default MoneyUp;