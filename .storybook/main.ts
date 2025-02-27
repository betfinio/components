import type { StorybookConfig } from 'storybook-react-rsbuild';

const config: StorybookConfig = {
	stories: ['../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)', '../stories/**/*.mdx'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', 'storybook-addon-rslib', '@storybook/addon-themes'],
	framework: {
		name: 'storybook-react-rsbuild',
		options: {},
	},
	rsbuildFinal: (config) => {
		// Customize the final Rsbuild config here
		return config;
	},
	docs: {
		autodocs: 'tag',
	},
	typescript: {
		reactDocgen: 'react-docgen-typescript',
		check: true,
	},
};

export default config;
