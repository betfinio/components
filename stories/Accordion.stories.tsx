import type { Meta, StoryObj } from '@storybook/react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../src/components/ui/accordion';

const meta = {
	title: 'Accordion',
	component: Accordion,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		type: {
			options: ['single', 'multiple'],
			control: { type: 'radio' },
			description: 'Determines whether one or multiple items can be opened at the same time',
		},
		collapsible: {
			control: 'boolean',
			description: 'When type is "single", allows closing content when clicking the trigger for an open item',
		},
		defaultValue: {
			control: 'text',
			description: 'The value of the item to expand by default (controlled)',
		},
	},
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		type: 'single',
		collapsible: true,
		className: 'w-[400px]',
		children: (
			<>
				<AccordionItem value="item-1">
					<AccordionTrigger>Is it accessible?</AccordionTrigger>
					<AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger>Is it styled?</AccordionTrigger>
					<AccordionContent>Yes. It comes with default styles that match the other components' aesthetic.</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger>Is it animated?</AccordionTrigger>
					<AccordionContent>Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
				</AccordionItem>
			</>
		),
	},
};

export const Multiple: Story = {
	args: {
		type: 'multiple',
		className: 'w-[400px]',
		children: (
			<>
				<AccordionItem value="item-1">
					<AccordionTrigger>First section</AccordionTrigger>
					<AccordionContent>You can open multiple sections at once with this configuration.</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger>Second section</AccordionTrigger>
					<AccordionContent>Try opening this section while the others are open.</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger>Third section</AccordionTrigger>
					<AccordionContent>All sections can be expanded simultaneously.</AccordionContent>
				</AccordionItem>
			</>
		),
	},
};

export const WithDefaultValue: Story = {
	args: {
		type: 'single',
		collapsible: true,
		defaultValue: 'item-2',
		className: 'w-[400px]',
		children: (
			<>
				<AccordionItem value="item-1">
					<AccordionTrigger>First section</AccordionTrigger>
					<AccordionContent>This section starts closed.</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger>Second section (default open)</AccordionTrigger>
					<AccordionContent>This section starts open because of the defaultValue prop.</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger>Third section</AccordionTrigger>
					<AccordionContent>This section starts closed.</AccordionContent>
				</AccordionItem>
			</>
		),
	},
};

export const CustomStyling: Story = {
	args: {
		type: 'single',
		collapsible: true,
		className: 'w-[400px]',
		children: (
			<>
				<AccordionItem value="item-1" className="border-b border-blue-200">
					<AccordionTrigger className="text-blue-600 hover:text-blue-800">Custom styled trigger</AccordionTrigger>
					<AccordionContent className="bg-blue-50 rounded-b-md">This content has a custom background color.</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2" className="border-b border-green-200">
					<AccordionTrigger className="text-green-600 hover:text-green-800">Another custom style</AccordionTrigger>
					<AccordionContent className="bg-green-50 rounded-b-md">Different styling for this content section.</AccordionContent>
				</AccordionItem>
			</>
		),
	},
};
