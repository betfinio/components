import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';
import { cn } from '../../lib/utils';

interface CustomProps {
	trackClassName?: string;
	rangeClassName?: string;
	thumbClassName?: string;
}

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & CustomProps>(
	({ className, trackClassName, rangeClassName, thumbClassName, ...props }, ref) => (
		<SliderPrimitive.Root ref={ref} className={cn('relative flex w-full touch-none select-none items-center', className)} {...props}>
			<SliderPrimitive.Track className={cn('relative h-[2px] w-full grow overflow-hidden rounded-full bg-secondary', trackClassName)}>
				<SliderPrimitive.Range className={cn('absolute h-full bg-primary', rangeClassName)} />
			</SliderPrimitive.Track>
			<SliderPrimitive.Thumb
				className={cn(
					'block h-3 w-3 cursor-pointer rounded-full border-2 border-primary bg-primary  transition-colors focus-visible:outline-none  disabled:pointer-events-none disabled:opacity-50',
					thumbClassName,
				)}
			/>
			<div className={'absolute left-0 top-[-10px] bottom-[-20px] w-full '} />
		</SliderPrimitive.Root>
	),
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
