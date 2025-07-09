import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cva, type VariantProps } from 'class-variance-authority';
import type React from 'react';
import { cn } from '@/lib/utils';

const progressVariants = cva('relative h-3 w-full overflow-hidden rounded-full bg-secondary', {
	variants: {
		variant: {
			default: 'bg-secondary',
		},
	},
});

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>, VariantProps<typeof progressVariants> {}
const Progress = ({ className, value, variant, ...props }: ProgressProps) => (
	<ProgressPrimitive.Root className={cn(progressVariants({ variant }), className)} {...props}>
		<ProgressPrimitive.Indicator className="h-full w-full flex-1 bg-primary transition-all" style={{ transform: `translateX(-${100 - (value || 0)}%)` }} />
	</ProgressPrimitive.Root>
);

export { Progress };
