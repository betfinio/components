import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import type React from 'react';

const Tabs = TabsPrimitive.Root;

const TabsList = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>) => (
	<TabsPrimitive.List
		data-slot="tabs-list"
		className={cn('inline-flex bg-background min-h-10 w-full flex-nowrap items-center justify-start gap-2', className)}
		{...props}
	/>
);

const tabVariants = cva(
	'inline-flex items-center justify-center border  whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-80 ',
	{
		variants: {
			variant: {
				default:
					'data-[state=active]:border-primary hover:data-[state=inactive]:border-primary/50 data-[state=inactive]:border-gray-800 data-[state=active]:text-white data-[state=active]:shadow-xs',
				contained:
					'data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=inactive]:border-transparent data-[state=active]:text-primary-foreground data-[state=inactive]:text-muted-foreground',
			},
			size: {
				default: 'px-3 py-1.5',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
);

interface TabTriggerProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>, VariantProps<typeof tabVariants> {}
const TabsTrigger = ({ className, variant, size, ...props }: TabTriggerProps) => (
	<TabsPrimitive.Trigger data-slot="tabs-trigger" className={cn(tabVariants({ variant, size, className }))} {...props} />
);

const TabsContent = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>) => (
	<TabsPrimitive.Content
		className={cn(
			'mt-2 w-full ring-offset-background rounded-md focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
			className,
		)}
		{...props}
	/>
);

export { Tabs, TabsList, TabsTrigger, TabsContent };
