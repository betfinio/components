import { Drawer as DrawerPrimitive } from 'vaul';
import { cn } from '@/lib/utils';

const Drawer = ({ shouldScaleBackground = true, ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
	<DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
);

const DrawerTrigger: React.ComponentType<React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Trigger>> = DrawerPrimitive.Trigger;

const DrawerPortal: React.ComponentType<React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Portal>> = DrawerPrimitive.Portal;

const DrawerClose: React.ComponentType<React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Close>> = DrawerPrimitive.Close;

const DrawerOverlay = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>) => (
	<DrawerPrimitive.Overlay className={cn('fixed inset-0 z-50 bg-black/80', className)} {...props} />
);

interface IDrawerContentProps extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> {
	hasLine?: boolean;
}
const DrawerContent = ({ className, children, hasLine = true, ...props }: IDrawerContentProps) => (
	<DrawerPortal>
		<DrawerOverlay />
		<DrawerPrimitive.Content
			className={cn('fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border border-gray-900 bg-card', className)}
			{...props}
		>
			{hasLine && <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-gray-500" />}
			{children}
		</DrawerPrimitive.Content>
	</DrawerPortal>
);

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn('grid gap-1.5 p-4 text-center sm:text-left', className)} {...props} />
);

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn('mt-auto flex flex-col gap-2 p-4', className)} {...props} />
);
const DrawerTitle = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>) => (
	<DrawerPrimitive.Title className={cn('text-lg font-semibold leading-none tracking-tight', className)} {...props} />
);

const DrawerDescription = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>) => (
	<DrawerPrimitive.Description className={cn('text-sm text-muted-foreground', className)} {...props} />
);

export { Drawer, DrawerPortal, DrawerOverlay, DrawerTrigger, DrawerClose, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription };
