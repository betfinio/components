import type { Meta, StoryObj } from '@storybook/react';
// biome-ignore lint/correctness/noUnusedImports: todo
import * as React from 'react';
import {
	ContextMenu,
	ContextMenuCheckboxItem,
	ContextMenuContent,
	ContextMenuGroup,
	ContextMenuItem,
	ContextMenuLabel,
	ContextMenuRadioGroup,
	ContextMenuRadioItem,
	ContextMenuSeparator,
	ContextMenuShortcut,
	ContextMenuSub,
	ContextMenuSubContent,
	ContextMenuSubTrigger,
	ContextMenuTrigger,
} from '../src/components/ui';

const meta = {
	title: 'ContextMenu',
	component: ContextMenu,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<ContextMenu>
			<ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
				Right click here
			</ContextMenuTrigger>
			<ContextMenuContent className="w-64">
				<ContextMenuItem>
					Back
					<ContextMenuShortcut>⌘[</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem disabled>
					Forward
					<ContextMenuShortcut>⌘]</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem>
					Reload
					<ContextMenuShortcut>⌘R</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuSub>
					<ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
					<ContextMenuSubContent className="w-48">
						<ContextMenuItem>
							Save Page As...
							<ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
						</ContextMenuItem>
						<ContextMenuItem>Create Shortcut...</ContextMenuItem>
						<ContextMenuItem>Name Window...</ContextMenuItem>
						<ContextMenuSeparator />
						<ContextMenuItem>Developer Tools</ContextMenuItem>
					</ContextMenuSubContent>
				</ContextMenuSub>
				<ContextMenuSeparator />
				<ContextMenuCheckboxItem checked>
					Show Bookmarks Bar
					<ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
				</ContextMenuCheckboxItem>
				<ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
				<ContextMenuSeparator />
				<ContextMenuRadioGroup value="pedro">
					<ContextMenuLabel inset>People</ContextMenuLabel>
					<ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
					<ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
				</ContextMenuRadioGroup>
			</ContextMenuContent>
		</ContextMenu>
	),
};

export const WithGroups: Story = {
	render: () => (
		<ContextMenu>
			<ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
				Right click here
			</ContextMenuTrigger>
			<ContextMenuContent className="w-64">
				<ContextMenuGroup>
					<ContextMenuLabel>File</ContextMenuLabel>
					<ContextMenuItem>
						New Tab
						<ContextMenuShortcut>⌘T</ContextMenuShortcut>
					</ContextMenuItem>
					<ContextMenuItem>
						New Window
						<ContextMenuShortcut>⌘N</ContextMenuShortcut>
					</ContextMenuItem>
				</ContextMenuGroup>
				<ContextMenuSeparator />
				<ContextMenuGroup>
					<ContextMenuLabel>Edit</ContextMenuLabel>
					<ContextMenuItem>
						Undo
						<ContextMenuShortcut>⌘Z</ContextMenuShortcut>
					</ContextMenuItem>
					<ContextMenuItem>
						Redo
						<ContextMenuShortcut>⇧⌘Z</ContextMenuShortcut>
					</ContextMenuItem>
				</ContextMenuGroup>
			</ContextMenuContent>
		</ContextMenu>
	),
};

export const WithDestructiveItems: Story = {
	render: () => (
		<ContextMenu>
			<ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
				Right click here
			</ContextMenuTrigger>
			<ContextMenuContent className="w-64">
				<ContextMenuItem>Save</ContextMenuItem>
				<ContextMenuItem variant="destructive">Delete</ContextMenuItem>
				<ContextMenuSeparator />
				<ContextMenuItem>Share</ContextMenuItem>
			</ContextMenuContent>
		</ContextMenu>
	),
};
