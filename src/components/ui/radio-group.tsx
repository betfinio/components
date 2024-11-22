import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/src/lib/utils';

const RadioGroup = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Root>, React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>>(
	({ className, ...props }, ref) => {
		return <RadioGroupPrimitive.Root className={cn('grid gap-2', className)} {...props} ref={ref} />;
	},
);
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Item>, React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>>(
	({ className, ...props }, ref) => {
		return (
			<RadioGroupPrimitive.Item
				ref={ref}
				className={cn(
					'aspect-square h-5 w-5 rounded-full border border-purple-box text-purple-box focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
					className,
				)}
				{...props}
			>
				<RadioGroupPrimitive.Indicator className="flex items-center justify-center">
					<Circle className="h-3 w-3 fill-current text-current" />
				</RadioGroupPrimitive.Indicator>
			</RadioGroupPrimitive.Item>
		);
	},
);
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
