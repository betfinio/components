import type { Preview } from '@storybook/react';
import '../src/globals.css';
const preview: Preview = {
	parameters: {
		backgrounds: {
			values: [
				// 👇 Default values
				{ name: 'Dark', value: '#10131e' },
				{ name: 'Light', value: '#fff' },
			],
			// 👇 Specify which background is shown by default
			default: 'Dark',
		},
	},
};

export default preview;
