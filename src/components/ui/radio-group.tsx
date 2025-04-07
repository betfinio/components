import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';

import type React from 'react';
import { cn } from '../../lib/utils';

const RadioGroup = ({
	ref,
	className,
	...props
}: React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
	ref: React.RefObject<React.ElementRef<typeof RadioGroupPrimitive.Root>>;
}) => {
	return <RadioGroupPrimitive.Root className={cn('grid gap-2', className)} {...props} />;
};
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = ({
	ref,
	className,
	...props
}: React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
	ref: React.RefObject<React.ElementRef<typeof RadioGroupPrimitive.Item>>;
}) => {
	return (
		<RadioGroupPrimitive.Item
			className={cn(
				'aspect-square h-5 w-5 rounded-full border border-purple-box text-purple-box focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
				className,
			)}
			{...props}
		>
			<RadioGroupPrimitive.Indicator className="flex items-center justify-center">
				<Circle className="h-3 w-3 fill-current text-current" />
			</RadioGroupPrimitive.Indicator>
		</RadioGroupPrimitive.Item>
	);
};
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
