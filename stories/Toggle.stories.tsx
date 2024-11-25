import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from '../src/components/ui';

const meta = {
	title: 'DropdownMenu',
	component: DropdownMenu,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {},
} satisfies Meta<typeof DropdownMenu>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: (
			<>
				<DropdownMenuTrigger>
					<Button variant={'default'} size={'sm'}>
						Open
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>Profile</DropdownMenuItem>
					<DropdownMenuItem>Billing</DropdownMenuItem>
					<DropdownMenuItem>Team</DropdownMenuItem>
					<DropdownMenuItem>Subscription</DropdownMenuItem>
				</DropdownMenuContent>
			</>
		),
	},
};
export const SubMenu: Story = {
	args: {
		children: (
			<>
				<DropdownMenuTrigger>
					<Button variant={'default'} size={'sm'}>
						Open
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>Profile</DropdownMenuItem>
					<DropdownMenuItem>Billing</DropdownMenuItem>
					<DropdownMenuItem>Team</DropdownMenuItem>
					<DropdownMenuItem>Subscription</DropdownMenuItem>
					<DropdownMenuSub>
						<DropdownMenuSubTrigger>Settings</DropdownMenuSubTrigger>
						<DropdownMenuPortal>
							<DropdownMenuSubContent>
								<DropdownMenuItem>Profile</DropdownMenuItem>
								<DropdownMenuItem>Billing</DropdownMenuItem>
								<DropdownMenuItem>Team</DropdownMenuItem>
								<DropdownMenuItem>Subscription</DropdownMenuItem>
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>
				</DropdownMenuContent>
			</>
		),
	},
};

export default meta;
