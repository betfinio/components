import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Progress } from '../src/components/ui';

const meta = {
	title: 'Progress',
	component: Progress,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => {
		const [progress, setProgress] = React.useState(13);

		React.useEffect(() => {
			const timer = setTimeout(() => {
				setProgress(66);
			}, 1000);
			return () => clearTimeout(timer);
		}, []);

		return <Progress value={progress} className="w-[200px]" />;
	},
};
