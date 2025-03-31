import { dirname, join } from 'node:path';
import type { StorybookConfig } from 'storybook/internal/types';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
	stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: ['@storybook/addon-onboarding', '@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	core: {
		builder: '@storybook/builder-vite', // 👈 The builder enabled here.
	},
	docs: {
		autodocs: 'tag',
	},
};

export default config;
