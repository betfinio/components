import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [
		react(),
		tsConfigPaths(),
		dts({
			include: ['src/**/*'],
			exclude: ['src/**/*.stories.tsx'],
			outDir: 'dist',
		}),
	],
	build: {
		lib: {
			entry: {
				index: resolve(__dirname, 'src/index.ts'),
				'components/shared/index': resolve(__dirname, 'src/components/shared/index.ts'),
				'components/ui/index': resolve(__dirname, 'src/components/ui/index.ts'),
				'hooks/index': resolve(__dirname, 'src/hooks/index.ts'),
				'lib/index': resolve(__dirname, 'src/lib/index.ts'),
				'icons/index': resolve(__dirname, 'src/icons/index.ts'),
			},
			formats: ['es'],
		},
		rollupOptions: {
			external: ['react', 'react-dom', 'react/jsx-runtime'],
			output: {
				preserveModules: true,
				preserveModulesRoot: 'src',
				entryFileNames: '[name].js',
			},
		},
		minify: true,
		sourcemap: true,
		outDir: 'dist',
		emptyOutDir: true,
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
});
