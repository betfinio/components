import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Skeleton } from '../src/components/ui';

const meta = {
	title: 'Skeleton',
	component: Skeleton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="flex flex-col space-y-3">
			<Skeleton className="h-[125px] w-[250px] rounded-xl" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-[250px]" />
				<Skeleton className="h-4 w-[200px]" />
			</div>
		</div>
	),
};

export const Card: Story = {
	render: () => (
		<div className="flex items-center space-x-4">
			<Skeleton className="h-12 w-12 rounded-full" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-[250px]" />
				<Skeleton className="h-4 w-[200px]" />
			</div>
		</div>
	),
};

export const ProfileCard: Story = {
	render: () => (
		<div className="border rounded-lg p-4 max-w-sm w-full mx-auto">
			<div className="flex items-center space-x-4">
				<Skeleton className="h-16 w-16 rounded-full" />
				<div className="space-y-2 flex-1">
					<Skeleton className="h-5 w-[80%]" />
					<Skeleton className="h-4 w-[60%]" />
				</div>
			</div>
			<div className="space-y-3 mt-4">
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-[80%]" />
			</div>
			<div className="mt-6 flex justify-between">
				<Skeleton className="h-9 w-20 rounded-md" />
				<Skeleton className="h-9 w-20 rounded-md" />
			</div>
		</div>
	),
};
