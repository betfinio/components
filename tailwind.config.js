/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#0F121D',
					light: '#131624',
					lighter: '#151A2A',
					foreground: '#fff',
				},

				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					light: '#292546',
					lighter: '#201C4080',
					foreground: 'hsl(var(--secondary-foreground))',
				},

				purple: {
					box: '#6A6A9F',
					table: '#201C40',
				},
				red: {
					600: '#B80042',
					roulette: 'hsl(var(--red-roulette))',
				},
				gray: {
					800: 'hsl(var(--border))',
					300: '#201C40',
				},
				green: {
					roulette: 'hsl(var(--green-roulette))',
				},
				black: {
					roulette: 'hsl(var(--black-roulette))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				'accent-secondary': {
					DEFAULT: 'hsl(var(--accent-secondary))',
					foreground: 'hsl(var(--accent-secondary-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				'card-secondary': {
					DEFAULT: 'hsl(var(--card-secondary))',
					foreground: 'hsl(var(--card-secondary-foreground))',
				},
				tertiary: {
					DEFAULT: 'hsl(var(--tertiary))',
					foreground: 'hsl(var(--tertiary-foreground))',
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))',
				},
				bonus: {
					DEFAULT: 'hsl(var(--bonus))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			backgroundImage: {
				'game-roulette': "url('./assets/games/roulette.png')",
				'game-poker': "url('./assets/games/poker.png')",
				'game-predict': "url('./assets/games/predict.png')",
				'game-luro': "url('./assets/games/luro.png')",
				'game-stones': "url('./assets/games/stones.png')",
				'game-gem-roulette': "url('./assets/games/gem-roulette.png')",
				'game-slots': "url('./assets/games/slots.png')",
				'game-blackjack': "url('./assets/games/blackjack.png')",
				'primary-gradient': 'linear-gradient(to left, #1D1A3D, #7366FF 40%, #1D1A3D)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			fontFamily: {
				sans: ['Rubik', 'sans-serif'],
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
