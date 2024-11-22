import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Slider } from '../src/components/ui';

const meta = {
	title: 'Slider',
	component: Slider,
	parameters: {
		layout: 'centered',
		actions: {
			handles: ['click'],
		},
	},
	tags: ['autodocs'],
	argTypes: {
		max: {
			control: { type: 'number' },
		},
	},
	args: { onClick: fn(), children: 'Slider', max: 100, value: [33], step: 1 },
	decorators: [withActions],
} satisfies Meta<typeof Slider>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export default meta;
