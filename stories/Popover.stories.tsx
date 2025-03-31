import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Button, Popover, PopoverContent, PopoverTrigger } from '../src/components/ui';

const meta = {
	title: 'Popover',
	component: Popover,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline">Open Popover</Button>
			</PopoverTrigger>
			<PopoverContent className="w-80">
				<div className="grid gap-4">
					<div className="space-y-2">
						<h4 className="font-medium leading-none">Dimensions</h4>
						<p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
					</div>
					<div className="grid gap-2">
						<div className="grid grid-cols-3 items-center gap-4">
							<label htmlFor="width" className="text-sm">
								Width
							</label>
							<input id="width" className="col-span-2 h-8 rounded-md border border-gray-400 bg-transparent px-3 py-1 text-sm" placeholder="100%" />
						</div>
						<div className="grid grid-cols-3 items-center gap-4">
							<label htmlFor="height" className="text-sm">
								Height
							</label>
							<input id="height" className="col-span-2 h-8 rounded-md border border-gray-400 bg-transparent px-3 py-1 text-sm" placeholder="25px" />
						</div>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	),
};
