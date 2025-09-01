import type { DialogProps } from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { Command as CommandPrimitive } from 'cmdk';
import { Search } from 'lucide-react';
import type React from 'react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent } from './dialog';

const Command = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof CommandPrimitive>) => (
	<CommandPrimitive className={cn('flex h-full w-full flex-col  overflow-hidden rounded-lg', className)} {...props} />
);

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
	<div className="flex items-center border-b border-gray-900 px-3 bg-card" cmdk-input-wrapper="">
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

const commandListVariants = cva('', {
	variants: {
		variant: {
			default: 'max-h-[300px] overflow-y-auto overflow-x-hidden bg-background ',
		},
	},
});

interface CommandListProps extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>, VariantProps<typeof commandListVariants> {}

const CommandList = ({ className, variant = 'default', ...props }: CommandListProps) => (
	<CommandPrimitive.List className={cn(commandListVariants({ variant }), className)} {...props} />
);

const CommandEmpty = ({ ...props }: React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>) => (
	<CommandPrimitive.Empty className="py-6 text-center text-sm" {...props} />
);

const CommandLoading = ({ ...props }: React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>) => (
	<CommandPrimitive.Loading className="py-6 text-center text-sm" {...props} />
);

const commandGroupVariants = cva('', {
	variants: {
		variant: {
			default:
				'overflow-hidden p-1 text-gray-400 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-white',
		},
	},
});

interface CommandGroupProps extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>, VariantProps<typeof commandGroupVariants> {}

const CommandGroup = ({ className, variant = 'default', ...props }: CommandGroupProps) => (
	<CommandPrimitive.Group className={cn(commandGroupVariants({ variant }), className)} {...props} />
);

const CommandSeparator = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>) => (
	<CommandPrimitive.Separator className={cn('-mx-1 h-px bg-secondaryLight', className)} {...props} />
);

const commandItemVariants = cva('', {
	variants: {
		variant: {
			default:
				'relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden aria-selected:bg-secondary aria-selected:text-accent-foreground',
		},
	},
});
interface CommandItemProps extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>, VariantProps<typeof commandItemVariants> {}

const CommandItem = ({ className, variant = 'default', ...props }: CommandItemProps) => (
	<CommandPrimitive.Item className={cn(commandItemVariants({ variant }), className)} {...props} />
);

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
	<span className={cn('ml-auto text-xs tracking-widest text-white', className)} {...props} />
);

export {
	Command,
	CommandDialog,
	CommandInput,
	CommandList,
	CommandEmpty,
	CommandGroup,
	CommandItem,
	CommandShortcut,
	CommandSeparator,
	CommandLoading,
	commandGroupVariants,
	commandItemVariants,
	commandListVariants,
};
