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
	performance: {
		buildCache: false,
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
