import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import * as React from 'react';
import { Button } from '../src';

import { PlayIcon } from 'lucide-react';

const variants = ['Default', 'Destructive', 'Outline', 'Ghost', 'Link', 'Secondary', 'Tertiary'];
const sizes = ['lg', 'sm', 'icon', 'freeSize', 'default'];

const meta = {
	title: 'Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			options: variants.map((e) => e.toLowerCase()),
			control: { type: 'select' },
		},
		size: {
			options: sizes,
			control: { type: 'select' },
		},
	},
	args: { onClick: fn(), children: 'Button' },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: 'default',
	},
};

export const Destructive: Story = {
	args: {
		variant: 'destructive',
	},
};
export const Outline: Story = {
	args: {
		variant: 'outline',
	},
};

export const Secondary: Story = {
	args: {
		variant: 'secondary',
	},
};

export const Tertiary: Story = {
	args: {
		variant: 'tertiary',
	},
};

export const Ghost: Story = {
	args: {
		variant: 'ghost',
	},
};

export const Link: Story = {
	args: {
		variant: 'link',
	},
};

export const Large: Story = {
	args: {
		size: 'lg',
	},
};

export const Small: Story = {
	args: {
		size: 'sm',
	},
};

export const Icon: Story = {
	args: {
		size: 'icon',
		children: <PlayIcon className="w-3 h-3" />,
	},
};

export const FreeSize: Story = {
	args: {
		size: 'freeSize',
	},
};

export default meta;
