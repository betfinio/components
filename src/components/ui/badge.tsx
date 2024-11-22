import { cn } from '@/src/lib/utils.ts';
import { type VariantProps, cva } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
import * as React from 'react';

const badgeVariants = cva(
	'inline-flex items-center rounded-md border px-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
	{
		variants: {
			variant: {
				default: 'border-transparent bg-background text-primary-foreground ',
				secondary: 'border-transparent bg-secondary text-secondary-foreground ',
				destructive: 'border-transparent bg-destructive text-destructive-foreground ',
				outline: 'text-white',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
);

export interface BadgeProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };