import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';
import { cn } from '../../lib/utils';

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>>(
	({ className, ...props }, ref) => (
		<SliderPrimitive.Root ref={ref} className={cn('relative flex w-full touch-none select-none items-center', className)} {...props}>
			<SliderPrimitive.Track className="relative h-[2px] w-full grow overflow-hidden rounded-full bg-secondary ">
				<SliderPrimitive.Range className="absolute h-full bg-primary" />
			</SliderPrimitive.Track>
			<SliderPrimitive.Thumb className=" block h-3 w-3 cursor-pointer rounded-full border-2 border-primary bg-primary ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
			<div className={'absolute left-0 top-[-10px] bottom-[-20px] w-full '} />
		</SliderPrimitive.Root>
	),
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
