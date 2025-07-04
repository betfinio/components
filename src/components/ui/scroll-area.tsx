import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

import { cn } from '@/lib/utils';
import type React from 'react';

type ScrollAreaProps = React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & {
	viewPortClassName?: string;
};

const ScrollArea = ({ className, children, viewPortClassName, ...props }: ScrollAreaProps) => (
	<ScrollAreaPrimitive.Root className={cn('relative overflow-hidden', className)} {...props}>
		<ScrollAreaPrimitive.Viewport className={cn('h-full w-full rounded-[inherit]', viewPortClassName)}>{children}</ScrollAreaPrimitive.Viewport>
		<ScrollBar />
		<ScrollBar orientation="horizontal" />
		<ScrollAreaPrimitive.Corner />
	</ScrollAreaPrimitive.Root>
);

const ScrollBar = ({ className, orientation = 'vertical', ...props }: React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) => (
	<ScrollAreaPrimitive.ScrollAreaScrollbar
		orientation={orientation}
		className={cn(
			'flex touch-none select-none transition-colors',
			orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent p-[1px]',
			orientation === 'horizontal' && 'h-2.5 flex-col border-t border-t-transparent p-[1px]',
			className,
		)}
		{...props}
	>
		<ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
	</ScrollAreaPrimitive.ScrollAreaScrollbar>
);

export { ScrollArea, ScrollBar };
