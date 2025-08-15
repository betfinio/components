import { forwardRef } from 'react';
import { NumericFormat, type NumericFormatProps } from 'react-number-format';
import { cn } from '../../lib/utils';

export type { NumberFormatValues } from 'react-number-format/types';

export interface NumericInputProps extends NumericFormatProps {
	hasError?: boolean;
	scale?: 'sm' | 'md' | 'lg';
	unstyled?: boolean;
}

export const NumericInput = forwardRef<HTMLInputElement, NumericInputProps>(function NumericInput(props, ref) {
	const {
		thousandSeparator = ',',
		allowNegative = false,
		decimalScale = 0,
		min = 1,
		maxLength = 15,
		inputMode = 'numeric',
		hasError = false,
		scale = 'md',
		unstyled = false,
		className,
		...restProps
	} = props;

	// Base styles that are commonly used across the app
	const baseStyles = unstyled
		? ''
		: cn(
				// Layout and sizing
				'w-full text-center',
				// Background and borders
				'bg-background border border-border rounded-lg',
				// Typography
				'font-semibold text-foreground',
				// States
				'disabled:cursor-not-allowed disabled:opacity-50',
				// Transitions
				'duration-300 transition-colors',
				// Focus states
				'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
				// Scale variants
				{
					'px-2 py-1.5 text-xs h-8': scale === 'sm',
					'px-4 py-2 text-sm h-10': scale === 'md',
					'px-4 py-3 text-base lg:text-lg h-12': scale === 'lg',
				},
				// Error state
				hasError && 'text-destructive border-destructive',
			);

	return (
		<NumericFormat
			thousandSeparator={thousandSeparator}
			allowNegative={allowNegative}
			decimalScale={decimalScale}
			min={min}
			maxLength={maxLength}
			inputMode={inputMode}
			className={cn(baseStyles, className)}
			getInputRef={ref}
			{...restProps}
		/>
	);
});

NumericInput.displayName = 'NumericInput';
