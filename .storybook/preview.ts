import type { Preview } from '@storybook/react';
import '@/globals.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		backgrounds: {
			values: [
				{ name: 'Light', value: '#fff' },
				{ name: 'Dark', value: '#0F121D' },
			],
			default: 'Dark',
		},
	},
};

export default preview;
