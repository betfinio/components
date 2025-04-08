import { cn } from '@/lib/utils';
import * as SliderPrimitive from '@radix-ui/react-slider';
import React from 'react';

interface CustomProps {
	trackClassName?: string;
	rangeClassName?: string;
	thumbClassName?: string;
	invertBorder?: boolean;
}

interface SliderProps extends React.ComponentProps<typeof SliderPrimitive.Root>, CustomProps {
	value: number[];
	min?: number;
	max?: number;
	onValueChange?: (value: number[]) => void;
}

function Slider({
	className,
	trackClassName,
	rangeClassName,
	thumbClassName,
	invertBorder = false,
	value,
	min = 0,
	max = 100,
	onValueChange,
	...props
}: SliderProps) {
	// Adjust the value to maintain the same visual position when inverted
	const adjustedValue = React.useMemo(() => {
		return invertBorder ? value?.map((v: number) => max + min - v) : value;
	}, [value, invertBorder, max, min]);

	// Handler that re-adjusts the value before sending it to the original callback
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
			data-slot="slider"
			value={adjustedValue}
			min={min}
			max={max}
			onValueChange={handleValueChange}
			className={cn('relative flex w-full touch-none select-none items-center', className)}
			{...props}
		>
			<SliderPrimitive.Track data-slot="slider-track" className={cn('relative h-[2px] w-full grow overflow-hidden rounded-full bg-secondary', trackClassName)}>
				<SliderPrimitive.Range data-slot="slider-range" className={cn('absolute h-full', 'border-2 border-primary', rangeClassName)} />
			</SliderPrimitive.Track>
			<SliderPrimitive.Thumb
				data-slot="slider-thumb"
				className={cn(
					'block h-3 w-3 cursor-pointer rounded-full border-2 border-primary bg-primary transition-colors focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50',
					thumbClassName,
				)}
			/>
			<div data-slot="slider-hit-area" className={'absolute left-0 top-[-10px] bottom-[-20px] w-full '} />
		</SliderPrimitive.Root>
	);
}

export { Slider };
