import { forwardRef } from 'react';
import { NumericFormat, type NumericFormatProps } from 'react-number-format';

export type { NumberFormatValues } from 'react-number-format/types';

export type NumericInputProps = NumericFormatProps<any>;

export const NumericInput = forwardRef<HTMLInputElement, NumericInputProps>(function NumericInput(props, ref) {
	const {
		thousandSeparator = ',',
		allowNegative = false,
		decimalScale = 0,
		min = 1,
		maxLength = 15,
		inputMode = 'numeric',
		balance = 0n,
		disabled,
		...restProps
	} = props;

	return (
		<NumericFormat
			thousandSeparator={thousandSeparator}
			allowNegative={allowNegative}
			decimalScale={decimalScale}
			min={min}
			maxLength={maxLength}
			inputMode={inputMode}
			disabled={disabled || balance <= 0}
			getInputRef={ref}
			{...restProps}
		/>
	);
});

NumericInput.displayName = 'NumericInput';
