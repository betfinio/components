import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { SearchInput } from '../src/components/ui';

const meta = {
	title: 'SearchInput',
	component: SearchInput,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		debounceMs: {
			control: { type: 'number' },
			description: 'Debounce delay in milliseconds',
		},
		placeholder: {
			control: { type: 'text' },
			description: 'Placeholder text for the input',
		},
		className: {
			control: { type: 'text' },
			description: 'Additional CSS classes',
		},
	},
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper component for controlled stories
const SearchInputWrapper = (args: any) => {
	const [value, setValue] = useState('');

	return <SearchInput {...args} value={value} onChange={setValue} />;
};

export const Default: Story = {
	render: SearchInputWrapper,
	args: {
		placeholder: 'Search...',
		debounceMs: 300,
		className: 'w-[300px]',
	},
};
