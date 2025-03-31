import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';

export default defineConfig({
	source: {
		entry: {
			index: ['./src/**'],
		},
	},
	lib: [
		{
			bundle: false,
			dts: true,
			format: 'esm',
		},
	],
	tools: {
		rspack: {
			output: {
				clean: true,
				chunkLoading: 'import',
			},
		},
	},
	output: {
		target: 'web',
	},
	plugins: [pluginReact()],
});
