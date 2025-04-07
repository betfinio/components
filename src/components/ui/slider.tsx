import * as SliderPrimitive from '@radix-ui/react-slider';

import React from 'react';
import { cn } from '../../lib/utils';

interface CustomProps {
	trackClassName?: string;
	rangeClassName?: string;
	thumbClassName?: string;
	invertBorder?: boolean;
}

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & CustomProps>(
	({ className, trackClassName, rangeClassName, thumbClassName, invertBorder = false, value, min = 0, max = 100, onValueChange, ...props }, ref) => {
		// Ajusta o valor para manter a mesma posição visual quando invertido
		const adjustedValue = React.useMemo(() => {
			return invertBorder ? value?.map((v) => max + min - v) : value;
		}, [value, invertBorder, max, min]);

		// Handler que re-ajusta o valor antes de enviá-lo para o callback original
		const handleValueChange = React.useCallback(
			(newValue: number[]) => {
				if (onValueChange) {
					const readjustedValue = invertBorder ? newValue.map((v) => max + min - v) : newValue;
					onValueChange(readjustedValue);
				}
			},
			[onValueChange, invertBorder, max, min],
		);

		return (
			<SliderPrimitive.Root
				ref={ref}
				inverted={invertBorder}
				value={adjustedValue}
				min={min}
				max={max}
				onValueChange={handleValueChange}
				className={cn('relative flex w-full touch-none select-none items-center', className)}
				{...props}
			>
				<SliderPrimitive.Track className={cn('relative h-[2px] w-full grow overflow-hidden rounded-full bg-secondary', trackClassName)}>
					<SliderPrimitive.Range className={cn('absolute h-full', 'border-2 border-primary', rangeClassName)} />
				</SliderPrimitive.Track>
				<SliderPrimitive.Thumb
					className={cn(
						'block h-3 w-3 cursor-pointer rounded-full border-2 border-primary bg-primary transition-colors focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50',
						thumbClassName,
					)}
				/>
				<div className={'absolute left-0 top-[-10px] bottom-[-20px] w-full '} />
			</SliderPrimitive.Root>
		);
	},
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
