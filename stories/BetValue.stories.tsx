import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BetValue } from '../src/components/shared';
import { Button } from '../src/components/ui/button';

const meta = {
	title: 'BetValue',
	component: BetValue,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {
		value: 1_000_000,
		withIcon: true,
	},
} satisfies Meta<typeof BetValue>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const WithoutIcon: Story = {
	args: {
		withIcon: false,
	},
};
export const TooltipPosition: Story = {
	args: {
		place: 'left',
	},
};
export const Precision: Story = {
	args: {
		precision: 9,
		value: 0.999_999_999,
	},
};
export const TooltipPostfix: Story = {
	args: {
		postfix: 'USDT',
	},
};
export const TooltipPrefix: Story = {
	args: {
		prefix: 'Bonus:',
	},
};
export const IconClassName: Story = {
	args: {
		iconClassName: 'text-destructive',
	},
};

export const Animated: Story = {
	args: {
		animated: true,
		value: 1_000_000,
	},
	render: (args) => {
		const [value, setValue] = React.useState(args.value);

		const randomizeValue = () => {
			const newValue = Math.floor(Math.random() * 10_000_000);
			setValue(newValue);
		};

		return (
			<div className="flex flex-col gap-4 items-center">
				<BetValue {...args} value={value} />
				<Button onClick={randomizeValue}>Randomize Value</Button>
			</div>
		);
	},
};

export default meta;
