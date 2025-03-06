import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Input } from '../src/components/ui';

const meta = {
	title: 'Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		type: 'text',
		placeholder: 'Enter text here...',
		className: 'w-[300px]',
	},
};

export const Disabled: Story = {
	args: {
		type: 'text',
		placeholder: 'Disabled input',
		disabled: true,
		className: 'w-[300px]',
	},
};

export const WithLabel: Story = {
	render: () => (
		<div className="grid w-full max-w-sm items-center gap-1.5">
			<label htmlFor="email" className="text-sm font-medium leading-none">
				Email
			</label>
			<Input type="email" id="email" placeholder="Email" />
		</div>
	),
};
