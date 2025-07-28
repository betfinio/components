import { readFileSync, writeFileSync } from 'node:fs';

// Custom plugin to extract theme.css
export const extractThemePlugin = () => {
	return {
		name: 'extract-theme',
		writeBundle() {
			try {
				// Read the theme.css file
				const themeContent = readFileSync('src/theme.css', 'utf-8');
				// Write it to dist/theme.css
				writeFileSync('dist/theme.css', themeContent);
				console.log('✅ theme.css extracted to dist/theme.css');
			} catch (error) {
				console.error('❌ Failed to extract theme.css:', error);
			}
		},
	};
};
