import { cn } from '@/lib/utils';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

const Accordion = AccordionPrimitive.Root;

function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
	return <AccordionPrimitive.Item data-slot="accordion-item" className={cn('border border-b last:border-b-0', className)} {...props} />;
}

function AccordionTrigger({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
	return (
		<AccordionPrimitive.Header className="flex">
			<AccordionPrimitive.Trigger
				data-slot="accordion-trigger"
				className={cn('flex flex-1 items-center justify-between py-4 font-medium transition-all  [&[data-state=open]>svg]:rotate-180 ', className)}
				{...props}
			>
				{children}
				<ChevronDown className="h-6 w-6 shrink-0 text-muted-foreground transition-transform duration-200" />
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	);
}

function AccordionContent({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
	return (
		<AccordionPrimitive.Content
			data-slot="accordion-content"
			className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
			{...props}
		>
			<div className={cn('pb-4 pt-0', className)}>{children}</div>
		</AccordionPrimitive.Content>
	);
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
