import type { FC } from 'react';

import type { IconProps } from './';

const BnbChain: FC<IconProps> = ({ className = 'text-[#ECF1F9]' }) => {
	return (
		<svg width="31" height="31" viewBox="0 0 31 31" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M9.48129 13.0258L15.5021 7.0075L21.5253 13.0307L25.0266 9.52697L15.5021 0L5.97754 9.52452L9.48129 13.0258Z" fill="currentColor" />
			<path d="M0 15.5005L3.50247 11.998L7.00494 15.5005L3.50247 19.003L0 15.5005Z" fill="currentColor" />
			<path
				d="M9.48228 17.9741L15.5031 23.9949L21.5263 17.9717L25.03 21.4705L25.0276 21.473L15.5031 31L5.97853 21.4779L5.97363 21.473L9.48228 17.9741Z"
				fill="currentColor"
			/>
			<path d="M23.9941 15.5015L27.4966 11.999L30.9991 15.5015L27.4966 19.0039L23.9941 15.5015Z" fill="currentColor" />
			<path
				d="M19.0557 15.4985L15.5029 11.9434L12.8757 14.5706L12.5721 14.8717L11.9502 15.4936L11.9453 15.4985L11.9502 15.5059L15.5029 19.0561L19.0557 15.501L19.0581 15.4985H19.0557Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default BnbChain;
