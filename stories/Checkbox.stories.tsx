import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Checkbox } from '../src/components/ui';

const meta = {
	title: 'Checkbox',
	component: Checkbox,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="flex items-center space-x-2">
			<Checkbox id="terms" />
			<label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
				Accept terms and conditions
			</label>
		</div>
	),
};

export const Disabled: Story = {
	render: () => (
		<div className="flex items-center space-x-2">
			<Checkbox id="disabled" disabled />
			<label htmlFor="disabled" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
				Disabled
			</label>
		</div>
	),
};
