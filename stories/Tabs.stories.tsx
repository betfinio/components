import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '../src/components/ui';

const meta = {
	title: 'Tabs',
	component: Tabs,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: { onClick: fn(), defaultValue: 'conservative' },
} satisfies Meta<typeof Tabs>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: (
			<TabsList>
				<TabsTrigger value={'conservative'}>Conservative</TabsTrigger>
				<TabsTrigger value={'dynamic'}>Dynamic</TabsTrigger>
			</TabsList>
		),
	},
};
export const Contained: Story = {
	args: {
		children: (
			<TabsList>
				<TabsTrigger variant={'contained'} value={'conservative'}>
					Conservative
				</TabsTrigger>
				<TabsTrigger variant={'contained'} value={'dynamic'}>
					Dynamic
				</TabsTrigger>
			</TabsList>
		),
	},
};

export default meta;
