import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';

export default defineConfig({
	source: {
		entry: {
			index: ['./src/**'],
		},
	},
	resolve: {
		alias: {
			'@/*': './src/*',
		},
	},
	lib: [
		{
			bundle: false,
			dts: true,
			format: 'esm',
		},
	],
	output: {
		target: 'web',
		cleanDistPath: true,
		minify: true,
		externals: {
			'framer-motion': 'framer-motion',
			clsx: 'clsx',
			'tailwind-merge': 'tailwind-merge',
		},
	},
	tools: {
		rspack: {
			output: {
				chunkLoading: 'import',
			},
		},
	},
	plugins: [
		pluginReact({
			swcReactOptions: {
				runtime: 'classic',
			},
		}),
	],
});
