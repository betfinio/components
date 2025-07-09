import { describe, expect, it } from 'vitest';
import { cn } from './utils';

describe('cn function with namespace merging', () => {
	it('should merge conflicting text color classes correctly', () => {
		const result = cn('text-red-500', 'rl:text-foreground');
		console.log('Result:', result);

		// Should only have rl:text-foreground, not both
		expect(result).toContain('rl:text-foreground');
		expect(result).not.toContain('text-red-500');
	});

	it('should handle multiple conflicting classes', () => {
		const result = cn('text-red-500 bg-blue-500 p-4', 'rl:text-foreground rl:bg-green-500 rl:p-8');
		console.log('Result:', result);

		expect(result).toContain('rl:text-foreground');
		expect(result).toContain('rl:bg-green-500');
		expect(result).toContain('rl:p-8');
		expect(result).not.toContain('text-red-500');
		expect(result).not.toContain('bg-blue-500');
		expect(result).not.toContain('p-4');
	});

	it('should preserve non-conflicting classes', () => {
		const result = cn('text-red-500 rounded-md', 'rl:text-foreground rl:flex-col');
		console.log('Result:', result);

		expect(result).toContain('rl:text-foreground');
		expect(result).toContain('rl:flex-col');
		expect(result).toContain('rounded-md');
		expect(result).not.toContain('text-red-500');
	});

	it('should handle the actual button classes', () => {
		const result = cn(
			'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-red-500 rounded-md',
			'rl:text-foreground rl:flex-col rl:text-xs rl:flex rl:items-center rl:font-normal',
		);
		console.log('Result:', result);

		expect(result).toContain('rl:text-foreground');
		expect(result).not.toContain('text-red-500');
	});

	it('should handle multiple prefixes', () => {
		const result = cn('text-red-500 bg-blue-500 p-4', 'ui:text-green-500  rl:p-8');
		console.log('Result:', result);

		expect(result).toContain('ui:text-green-500');
		expect(result).toContain('rl:p-8');
		expect(result).not.toContain('text-red-500');
		expect(result).not.toContain('p-4');
	});

	it('should handle negative values', () => {
		const result = cn('p-4', '-rl:p-8');
		console.log('Result:', result);

		expect(result).toContain('-rl:p-8');
		expect(result).not.toContain('p-4');
	});

	it('should handle multiple prefixed classes with same property', () => {
		const result = cn('text-red-500', 'rl:text-foreground');
		console.log('Result:', result);

		// Last prefixed class should win
		expect(result).toContain('rl:text-foreground');
		expect(result).not.toContain('text-red-500');
	});
});
