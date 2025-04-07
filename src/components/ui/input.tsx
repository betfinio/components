import type React from 'react';
import { cn } from '../../lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({
	ref,
	className,
	type,
	...props
}: InputProps & {
	ref: React.RefObject<HTMLInputElement>;
}) => {
	return (
		<input
			type={type}
			className={cn(
				'flex h-10 w-full text-white rounded-md border border-gray-400 bg-transparent px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-hidden  disabled:cursor-not-allowed disabled:opacity-50',
				className,
			)}
			{...props}
		/>
	);
};
Input.displayName = 'Input';

export { Input };
