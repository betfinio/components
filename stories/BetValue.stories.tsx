import type { Meta, StoryObj } from '@storybook/react';
import { BetValue } from '../src/components/shared';

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

export default meta;
