import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import type React from 'react';

const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground hover:bg-primary/90',
				destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
				outline: 'border border-border bg-transparent hover:bg-background-light text-foreground',
				secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
				success: 'bg-success text-success-foreground hover:bg-success/80',
				tertiary: 'bg-tertiary text-tertiary-foreground hover:bg-tertiary/80',
				ghost: 'text-muted-foreground',
				link: 'text-foreground underline-offset-4 hover:underline',
			},
			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-9 px-3 text-sm',
				lg: 'h-11  px-8',
				icon: 'h-10 w-10',
				freeSize: '',
			},
			shape: {
				default: 'rounded-md',
				pill: 'rounded-full',
				square: 'rounded-none',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
			shape: 'default',
		},
	},
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = ({ className, variant, size, shape, asChild = false, ...props }: ButtonProps) => {
	const Comp = asChild ? Slot : 'button';

	return <Comp className={cn(buttonVariants({ variant, size, shape, className }))} {...props} />;
};

export { Button, buttonVariants };
