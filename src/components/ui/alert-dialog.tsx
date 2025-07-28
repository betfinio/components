import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import type React from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants } from './button';

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>) => (
	<AlertDialogPrimitive.Overlay
		className={cn(
			'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
			className,
		)}
		{...props}
	/>
);

const AlertDialogContent = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>) => (
	<AlertDialogPortal>
		<AlertDialogOverlay />
		<AlertDialogPrimitive.Content
			className={cn(
				'fixed left-[50%] top-[50%] w-fit z-50 grid translate-x-[-50%] p-2 md:p-3 lg:p-4 translate-y-[-50%] gap-4 border border-border bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 rounded-xl',
				className,
			)}
			{...props}
		/>
	</AlertDialogPortal>
);

const AlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
);

const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...props} />
);

const AlertDialogTitle = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>) => (
	<AlertDialogPrimitive.Title className={cn('text-lg font-semibold', className)} {...props} />
);

const AlertDialogDescription = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>) => (
	<AlertDialogPrimitive.Description className={cn('text-sm text-muted-foreground', className)} {...props} />
);

const AlertDialogAction = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>) => (
	<AlertDialogPrimitive.Action className={cn(buttonVariants(), className)} {...props} />
);

const AlertDialogCancel = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>) => (
	<AlertDialogPrimitive.Cancel className={cn(buttonVariants({ variant: 'outline' }), className)} {...props} />
);

export {
	AlertDialog,
	AlertDialogPortal,
	AlertDialogOverlay,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogFooter,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogAction,
	AlertDialogCancel,
};
