import { Button, buttonVariants } from '@/src/components/ui/button';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import * as React from 'react';

import { PlayIcon } from 'lucide-react';

const meta = {
	title: 'Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		...buttonVariants,
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
