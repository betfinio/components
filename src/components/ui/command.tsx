import type { DialogProps } from '@radix-ui/react-dialog';
import { Command as CommandPrimitive } from 'cmdk';
import { Search } from 'lucide-react';

import type React from 'react';
import { cn } from '../../lib/utils';
import { Dialog, DialogContent } from './dialog';

const Command = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof CommandPrimitive>) => (
	<CommandPrimitive className={cn('flex h-full w-full flex-col md:min-w-[500px] overflow-hidden rounded-md bg-gray-800 text-white', className)} {...props} />
);
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
	return (
		<Dialog {...props}>
			<DialogContent className="overflow-hidden p-0 shadow-lg">
				<Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-white [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
					{children}
				</Command>
			</DialogContent>
		</Dialog>
	);
};

const CommandInput = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>) => (
	<div className="flex items-center border-b border-gray-900 px-3" cmdk-input-wrapper="">
		<Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
		<CommandPrimitive.Input
			className={cn(
				'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-white disabled:cursor-not-allowed disabled:opacity-50',
				className,
			)}
			{...props}
		/>
	</div>
);

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>) => (
	<CommandPrimitive.List className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)} {...props} />
);

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = ({ ...props }: React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>) => (
	<CommandPrimitive.Empty className="py-6 text-center text-sm" {...props} />
);

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandLoading = ({ ...props }: React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>) => (
	<CommandPrimitive.Loading className="py-6 text-center text-sm" {...props} />
);

CommandLoading.displayName = CommandPrimitive.Loading.displayName;

const CommandGroup = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>) => (
	<CommandPrimitive.Group
		className={cn(
			'overflow-hidden p-1 text-gray-400 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-white',
			className,
		)}
		{...props}
	/>
);

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>) => (
	<CommandPrimitive.Separator className={cn('-mx-1 h-px bg-secondaryLight', className)} {...props} />
);
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>) => (
	<CommandPrimitive.Item
		className={cn(
			'relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden aria-selected:bg-background-lighter aria-selected:text-primary',
			className,
		)}
		{...props}
	/>
);

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
	<span className={cn('ml-auto text-xs tracking-widest text-white', className)} {...props} />
);
CommandShortcut.displayName = 'CommandShortcut';

export { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator, CommandLoading };
