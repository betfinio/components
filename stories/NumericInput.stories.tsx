import type { Meta, StoryObj } from '@storybook/react';

import { NumericInput } from '../src/components/ui';

const meta = {
	title: 'NumericInput',
	component: NumericInput,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		thousandSeparator: {
			control: { type: 'text' },
			description: 'Character used as thousand separator',
		},
		allowNegative: {
			control: { type: 'boolean' },
			description: 'Whether to allow negative values',
		},
		decimalScale: {
			control: { type: 'number', min: 0, max: 10 },
			description: 'Number of decimal places allowed',
		},
		min: {
			control: { type: 'number' },
			description: 'Minimum value allowed',
		},
		maxLength: {
			control: { type: 'number' },
			description: 'Maximum length of input',
		},
		disabled: {
			control: { type: 'boolean' },
			description: 'Whether the input is disabled',
		},
		hasError: {
			control: { type: 'boolean' },
			description: 'Whether to show error state styling',
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description: 'Size variant of the input',
		},
		unstyled: {
			control: { type: 'boolean' },
			description: 'Whether to use default styling',
		},
	},
} satisfies Meta<typeof NumericInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: 'Enter amount...',
	},
};

export const WithDecimals: Story = {
	args: {
		placeholder: 'Enter decimal amount...',
		className: 'w-[300px]',
		decimalScale: 2,
		thousandSeparator: ',',
	},
};

export const AllowNegative: Story = {
	args: {
		placeholder: 'Enter positive or negative...',
		className: 'w-[300px]',
		allowNegative: true,
		decimalScale: 2,
	},
};

export const CustomSeparator: Story = {
	args: {
		placeholder: 'Enter amount...',
		className: 'w-[300px]',
		thousandSeparator: ' ',
		decimalScale: 2,
	},
};

export const Disabled: Story = {
	args: {
		placeholder: 'Disabled input',
		className: 'w-[300px]',
		disabled: true,
	},
};

export const LimitedLength: Story = {
	args: {
		placeholder: 'Max 5 characters...',
		className: 'w-[300px]',
		maxLength: 5,
	},
};

export const CurrencyStyle: Story = {
	args: {
		placeholder: 'Enter currency amount...',
		className: 'w-[300px]',
		decimalScale: 2,
		thousandSeparator: ',',
		prefix: '$',
	},
};

export const WithSuffix: Story = {
	args: {
		placeholder: 'Enter percentage...',
		className: 'w-[300px]',
		decimalScale: 2,
		suffix: '%',
		max: 100,
	},
};

export const Sizes: Story = {
	render: () => {
		return (
			<div className="space-y-4 w-[300px]">
				<div>
					<label htmlFor="small-input" className="text-sm font-medium leading-none mb-2 block">
						Small Size
					</label>
					<NumericInput id="small-input" size="sm" placeholder="Small input..." />
				</div>
				<div>
					<label htmlFor="medium-input" className="text-sm font-medium leading-none mb-2 block">
						Medium Size (Default)
					</label>
					<NumericInput id="medium-input" size="md" placeholder="Medium input..." />
				</div>
				<div>
					<label htmlFor="large-input" className="text-sm font-medium leading-none mb-2 block">
						Large Size
					</label>
					<NumericInput id="large-input" size="lg" placeholder="Large input..." />
				</div>
			</div>
		);
	},
};

export const ErrorState: Story = {
	render: () => {
		return (
			<div className="space-y-4 w-[300px]">
				<div>
					<label htmlFor="normal-input" className="text-sm font-medium leading-none mb-2 block">
						Normal State
					</label>
					<NumericInput id="normal-input" placeholder="Enter amount..." value={500} />
				</div>
				<div>
					<label htmlFor="error-input" className="text-sm font-medium leading-none mb-2 block">
						Error State (Insufficient Balance)
					</label>
					<NumericInput id="error-input" placeholder="Enter amount..." value={1500} hasError={true} />
				</div>
			</div>
		);
	},
};

export const Unstyled: Story = {
	args: {
		unstyled: true,
		placeholder: 'Unstyled input...',
		className: 'px-2 py-1',
	},
};
