import * as PopoverPrimitive from '@radix-ui/react-popover';

import type React from 'react';
import { cn } from '../../lib/utils';

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = ({ className, align = 'center', sideOffset = 4, ...props }: React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>) => (
	<PopoverPrimitive.Portal>
		<PopoverPrimitive.Content
			align={align}
			sideOffset={sideOffset}
			className={cn(
				'rounded-md bg-popover text-sm text-popover-foreground px-4 py-2 shadow-md outline-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
				className,
			)}
			{...props}
		/>
	</PopoverPrimitive.Portal>
);
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
