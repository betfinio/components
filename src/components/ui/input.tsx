import type React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ className, type, ...props }: InputProps) => {
	return (
		<input
			data-slot="input"
			type={type}
			className={cn(
				'flex h-10 w-full text-foreground rounded-md border border-border bg-transparent px-3 py-2 text-base  file:border-0 file:bg-transparent file:font-medium placeholder:text-muted-foreground focus-visible:outline-hidden  disabled:cursor-not-allowed disabled:opacity-50',
				className,
			)}
			{...props}
		/>
	);
};

export { Input };
