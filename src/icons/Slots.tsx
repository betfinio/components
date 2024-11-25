import type { FC } from 'react';
import * as React from 'react';
import type { IconProps } from './';

const Slots: FC<IconProps> = ({ className }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
			<g clipPath="url(#clip0_539_7211)">
				<path
					d="M10.1056 0.177691C9.91305 0.247231 9.74723 0.493291 9.08394 1.6915L8.3832 2.95925L7.45245 2.46178C6.4896 1.94291 6.24889 1.87337 5.98143 2.01245C5.85305 2.08734 5.71932 2.33875 5.71932 2.53132C5.71932 2.61155 5.93864 3.27485 6.21144 4.00233L6.70891 5.32892H10.2928H13.8768L14.3742 3.92209C14.9306 2.34944 14.9573 2.17292 14.7112 1.93756C14.615 1.84662 14.4759 1.78244 14.3528 1.76639C14.171 1.73964 14.0586 1.78778 13.4756 2.11943C13.1065 2.32805 12.6304 2.59551 12.4218 2.71319L12.0313 2.92715L11.3948 1.62196C10.8599 0.509338 10.7368 0.295373 10.5977 0.225834C10.4319 0.140247 10.2554 0.1242 10.1056 0.177691Z"
					fill="currentColor"
				/>
				<path
					d="M21.8327 1.92148C21.2443 2.08731 20.811 2.50454 20.6345 3.0662C20.5596 3.29086 20.5489 3.52623 20.565 4.2965C20.581 5.21121 20.5864 5.25935 20.7255 5.52146C20.8806 5.82101 21.3513 6.27569 21.5492 6.32383L21.6776 6.35592V11.2611L21.6723 16.1609L21.5439 15.9148C21.4743 15.7811 21.2925 15.5565 21.1427 15.4227C20.6452 14.9734 20.3439 15.0108 10.2714 15.0108C1.38117 15.0108 1.30628 15.0162 1.06557 15.1232C0.552051 15.3532 0.231102 15.7223 0.0759769 16.2518C0.00108886 16.5139 -0.00960943 16.8777 0.00643801 19.1404L0.0224854 21.724L0.172262 22.0236C0.343434 22.3766 0.701827 22.7297 1.05487 22.8901L1.30628 23.0078H10.2928H20.4206L20.7255 22.8634C21.0839 22.6976 21.4102 22.3766 21.5813 22.0289C21.6723 21.8363 21.7044 21.6598 21.7204 21.2533L21.7418 20.7344H22.6886C24.074 20.7344 24.0312 20.7933 24.0312 18.996C24.0312 17.6052 24.0098 17.4928 23.7103 17.3377C23.6193 17.2896 23.4107 17.2575 23.2021 17.2575H22.8544V11.8334V6.41476L23.1593 6.23289C23.5498 6.00288 23.8387 5.62309 23.951 5.19516C24.0259 4.93305 24.0366 4.68699 24.0259 4.013C24.0045 3.21063 23.9938 3.14644 23.8547 2.86293C23.6835 2.50989 23.3198 2.15684 22.9881 2.00707C22.6832 1.87334 22.1483 1.83055 21.8327 1.92148ZM16.6637 17.4607C16.8135 17.5303 17.0488 17.6961 17.1825 17.8352C17.5249 18.1829 17.6693 18.5252 17.6693 19.0013C17.6747 19.3329 17.6533 19.4292 17.4874 19.7502C17.3537 20.0123 17.2253 20.1728 17.0328 20.3172C16.5299 20.7023 16.9044 20.6863 10.1805 20.6702L4.14133 20.6542L3.86852 20.5098C3.52083 20.3279 3.13034 19.8946 3.02336 19.5737C2.97521 19.4346 2.93777 19.1671 2.93777 18.9746C2.93777 18.231 3.48338 17.541 4.20552 17.3698C4.3232 17.3431 6.99242 17.3217 10.3998 17.327L16.3909 17.3377L16.6637 17.4607Z"
					fill="currentColor"
				/>
				<path
					d="M1.07228 5.98762C0.848123 6.05969 0.671998 6.1572 0.485199 6.31831C0.0101953 6.72107 0.0315437 7.69688 0.0315437 10.9868V13.8697H11.4377H19.431L19.415 10.9656L19.3989 6.92033L19.2548 6.67867C19.0894 6.39886 18.7745 6.14025 18.4223 6.00458L18.1714 5.90283L10.3525 5.89435L1.39251 5.88163L1.07228 5.98762ZM6.08561 7.64035C6.32578 7.83113 6.2991 8.90515 5.9682 9.33759C5.33308 10.177 4.77268 11.3726 4.61257 12.2375C4.59656 12.3434 4.55386 12.4918 4.52717 12.5639C4.37774 12.9455 2.57201 12.9836 2.37987 12.6233C2.33184 12.53 2.33718 12.4198 2.40656 12.1145C2.58802 11.292 2.89224 10.5247 3.37258 9.70643C3.50067 9.48173 3.60741 9.29519 3.60741 9.28671C3.60741 9.27823 3.27117 9.26976 2.85488 9.26976H2.10234L1.94757 9.14681C1.72875 8.97299 1.72875 7.81417 1.94757 7.64035L2.10234 7.5174H3.4473H5.93084L6.08561 7.64035ZM11.6789 7.57675C11.8337 7.64459 11.9511 8.70589 11.9511 8.85852C11.9511 8.90939 11.8283 9.11289 11.6842 9.31215C11.0331 10.1813 10.6008 11.0801 10.3446 12.0891C10.2165 12.5978 10.1792 12.6953 10.0564 12.7759C9.84828 12.92 8.3948 12.9073 8.19199 12.7504C7.99986 12.5936 7.99452 12.513 8.17065 11.8262C8.34143 11.1564 8.66166 10.4017 9.02992 9.78274C9.19003 9.51565 9.31813 9.29095 9.31813 9.28671C9.31813 9.27823 8.98189 9.26976 8.57093 9.26976H7.82373L7.65295 9.14681C7.50884 9.04506 7.47682 8.99418 7.47682 8.8458C7.47682 8.69741 7.50884 7.7421 7.65295 7.64035L7.82373 7.5174H9.10998C10.1134 7.5174 11.5615 7.53012 11.6789 7.57675ZM17.459 7.64035C17.7152 7.82265 17.6938 8.90515 17.379 9.31639C16.7705 10.1007 16.2795 11.1182 16.0393 12.0806C15.8792 12.7038 15.8739 12.725 15.7138 12.8056C15.5003 12.9158 14.0842 12.8903 13.9027 12.7504C13.7746 12.6487 13.7479 12.5893 13.7479 12.424C13.7479 11.9322 14.2443 10.5713 14.714 9.78274C14.8581 9.54109 14.9755 9.32487 14.9755 9.30791C14.9755 9.28671 14.6659 9.26976 14.2816 9.26976C13.86 9.26976 13.5398 9.24856 13.4544 9.21888C13.1982 9.12561 13.0915 7.94136 13.2356 7.73362C13.3743 7.53436 13.4757 7.52164 14.8527 7.5174H17.2882L17.459 7.64035Z"
					fill="currentColor"
				/>
			</g>
			<defs>
				<clipPath id="clip0_539_7211">
					<rect width="24" height="24" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default Slots;