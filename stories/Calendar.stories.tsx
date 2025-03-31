import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import type { DateRange } from 'react-day-picker';
import { Calendar } from '../src/components/ui';

const meta = {
	title: 'Calendar',
	component: Calendar,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => {
		const [date, setDate] = React.useState<Date | undefined>(new Date());
		return <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />;
	},
};

export const RangeSelection: Story = {
	render: () => {
		const [range, setRange] = React.useState<DateRange | undefined>({
			from: new Date(),
			to: undefined,
		});

		const handleSelect = (range: DateRange | undefined) => {
			setRange(range);
		};

		return <Calendar mode="range" selected={range} onSelect={handleSelect} className="rounded-md border" />;
	},
};
