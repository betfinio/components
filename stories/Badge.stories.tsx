import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Badge } from '../src/components/ui';

const meta = {
	title: 'Badge',
	component: Badge,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			options: ['default', 'secondary', 'destructive', 'outline'],
			control: { type: 'select' },
		},
	},
	args: { onClick: fn(), children: 'Badge' },
} satisfies Meta<typeof Badge>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: 'default',
	},
};
export const Secondary: Story = {
	args: {
		variant: 'secondary',
	},
};

export const Destructive: Story = {
	args: {
		variant: 'destructive',
	},
};

export const Outline: Story = {
	args: {
		variant: 'outline',
	},
};

export default meta;
