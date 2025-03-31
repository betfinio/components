import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../src/components/ui';

const meta = {
	title: 'Dialog',
	component: Dialog,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">Open Dialog</Button>
			</DialogTrigger>
			<DialogContent className="p-2">
				<DialogHeader>
					<DialogTitle>Edit profile</DialogTitle>
					<DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<label htmlFor="name" className="text-right">
							Name
						</label>
						<input id="name" className="col-span-3 h-10 rounded-md border border-gray-400 bg-transparent px-3 py-2 text-sm" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<label htmlFor="username" className="text-right">
							Username
						</label>
						<input id="username" className="col-span-3 h-10 rounded-md border border-gray-400 bg-transparent px-3 py-2 text-sm" />
					</div>
				</div>
				<DialogFooter>
					<Button type="submit">Save changes</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	),
};
