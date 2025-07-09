import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

//rl: - roulette
//ui: - ui
//lr: - lucky round
//lt: - lotto
//sn: - stones
//app: - app
//pd: - predict
//lc - legendary-club

const knownPrefixes = ['rl', 'ui', 'lr', 'lt', 'sn', 'app', 'pd', 'lc'];
const prefixRegex = new RegExp(`^-?(${knownPrefixes.join('|')}):(.*)`);
const twMerge = extendTailwindMerge({
	experimentalParseClassName({ className, parseClassName }) {
		const match = className.match(prefixRegex);
		return parseClassName(match ? match[2] : className);
	},
});

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
