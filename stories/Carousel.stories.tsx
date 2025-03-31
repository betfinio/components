import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../src/components/ui';

const meta = {
	title: 'Carousel',
	component: Carousel,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Carousel className="w-full max-w-xs">
			<CarouselContent>
				{Array.from({ length: 5 }).map((_, index) => (
					<CarouselItem key={index}>
						<div className="p-1">
							<div className="flex aspect-square items-center justify-center p-6 bg-background-lighter rounded-md">
								<span className="text-4xl font-semibold">{index + 1}</span>
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	),
};
