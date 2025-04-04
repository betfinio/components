import type { Meta, StoryObj } from '@storybook/react';
import { Toaster, toast } from 'sonner';
import { Button } from '../src/components/ui/button';
import { SonnerToaster } from '../src/components/ui/sonner';

const meta: Meta<typeof SonnerToaster> = {
	title: 'Sonner',
	component: SonnerToaster,
	decorators: [
		(Story) => (
			<div>
				<Story />
				<div className="flex flex-col gap-4 p-4 max-w-[200px]">
					<Button onClick={() => toast('Default notification')}>Show Default Toast</Button>
					<Button onClick={() => toast.success('Success notification')}>Show Success Toast</Button>
					<Button onClick={() => toast.error('Error notification')}>Show Error Toast</Button>
					<Button
						onClick={() =>
							toast('Notification with action', {
								action: {
									label: 'Undo',
									onClick: () => console.log('Undo clicked, lol'),
								},
							})
						}
					>
						Show Toast with Action
					</Button>
					<Button
						onClick={() =>
							toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
								loading: 'Loading...',
								success: 'Promise resolved',
								error: 'Promise rejected',
							})
						}
					>
						Show Promise Toast
					</Button>
				</div>
			</div>
		),
	],
};

export default meta;

type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
	args: {},
};

export const CustomPosition: Story = {
	args: {
		position: 'top-right',
	},
};

export const CustomDuration: Story = {
	args: {
		duration: 5000,
	},
};

export const RichToast: Story = {
	render: () => (
		<>
			<Toaster />
			<Button
				onClick={() =>
					toast(
						<div className="flex flex-col gap-1">
							<h3 className="font-semibold">Complex Toast</h3>
							<p className="text-sm text-muted-foreground">This is a more complex toast with custom content</p>
						</div>,
					)
				}
			>
				Show Rich Toast
			</Button>
		</>
	),
};
