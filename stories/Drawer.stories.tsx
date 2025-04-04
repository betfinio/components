import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Button, Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../src/components/ui';

const meta = {
	title: 'Drawer',
	component: Drawer,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="outline">Open Drawer</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Edit profile</DrawerTitle>
					<DrawerDescription>Make changes to your profile here. Click save when you're done.</DrawerDescription>
				</DrawerHeader>
				<div className="p-4 pb-0">
					<div className="flex items-center justify-center space-y-2">
						<div className="flex flex-col space-y-2 w-full max-w-sm">
							<label htmlFor="name" className="text-sm font-medium leading-none">
								Name
							</label>
							<input id="name" className="h-10 rounded-md border border-gray-400 bg-transparent px-3 py-2 text-sm" />
						</div>
					</div>
				</div>
				<DrawerFooter>
					<Button>Save changes</Button>
					<DrawerClose asChild>
						<Button variant="outline">Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	),
};
