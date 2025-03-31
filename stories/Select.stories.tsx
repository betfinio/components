import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../src/components/ui';

const meta = {
	title: 'Select',
	component: Select,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Select>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Select a fruit" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Fruits</SelectLabel>
					<SelectItem value="apple">Apple</SelectItem>
					<SelectItem value="banana">Banana</SelectItem>
					<SelectItem value="blueberry">Blueberry</SelectItem>
					<SelectItem value="grapes">Grapes</SelectItem>
					<SelectItem value="pineapple">Pineapple</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	),
};

export const Minimized: Story = {
	render: () => (
		<Select>
			<SelectTrigger className="w-[180px]" minimized>
				<SelectValue placeholder="Select a fruit" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Fruits</SelectLabel>
					<SelectItem value="apple">Apple</SelectItem>
					<SelectItem value="banana">Banana</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	),
};
