import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { RadioGroup, RadioGroupItem } from '../src/components/ui';

const meta = {
	title: 'RadioGroup',
	component: RadioGroup,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<RadioGroup defaultValue="option-one">
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option-one" id="option-one" />
				<label htmlFor="option-one" className="text-sm font-medium leading-none">
					Option One
				</label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option-two" id="option-two" />
				<label htmlFor="option-two" className="text-sm font-medium leading-none">
					Option Two
				</label>
			</div>
		</RadioGroup>
	),
};
