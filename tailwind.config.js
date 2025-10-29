/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			...defaultTheme.screens,
			'2xs': [{ min: '320px' }],
			'xs': [{ min: '425px' }],
			'3xl': [{ min: '1920px' }],
		},
		extend: {
			fontFamily: {
				sans: ['Space Mono', 'ui-monospace', 'SF Mono', 'Monaco', 'Cascadia Code', 'Menlo', 'Consolas', 'Courier New', 'monospace'],
				mono: ['Space Mono', 'ui-monospace', 'SF Mono', 'Monaco', 'Cascadia Code', 'Menlo', 'Consolas', 'Courier New', 'monospace'],
			},
			colors: {
				'gray-text': '#333333',
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				card: {
					DEFAULT: 'var(--card)',
					foreground: 'var(--card-foreground)'
				},
				popover: {
					DEFAULT: 'var(--popover)',
					foreground: 'var(--popover-foreground)'
				},
				primary: {
					DEFAULT: 'var(--primary)',
					foreground: 'var(--primary-foreground)'
				},
				secondary: {
					DEFAULT: 'var(--secondary)',
					foreground: 'var(--secondary-foreground)'
				},
				muted: {
					DEFAULT: 'var(--muted)',
					foreground: 'var(--muted-foreground)'
				},
				accent: {
					DEFAULT: 'var(--accent)',
					foreground: 'var(--accent-foreground)'
				},
				destructive: {
					DEFAULT: 'var(--destructive)',
					foreground: 'var(--destructive-foreground)'
				},
				border: 'var(--border)',
				input: 'var(--input)',
				ring: 'var(--ring)',
				chart: {
					'1': 'var(--chart-1)',
					'2': 'var(--chart-2)',
					'3': 'var(--chart-3)',
					'4': 'var(--chart-4)',
					'5': 'var(--chart-5)'
				}
			},
			fontSize: {
				xs: ['0.75rem', { lineHeight: '1rem' }],      // 12px - small labels
				sm: ['0.875rem', { lineHeight: '1.25rem' }],  // 14px - navigation, captions
				base: ['1rem', { lineHeight: '1.5rem' }],     // 16px - body text
				lg: ['1.125rem', { lineHeight: '1.75rem' }],  // 18px - large body, subheadings
				xl: ['1.25rem', { lineHeight: '1.75rem' }],   // 20px - small headings
				'2xl': ['1.5rem', { lineHeight: '2rem' }],    // 24px - medium headings
				'3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px - large headings
				'4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px - hero text
				'5xl': ['3rem', { lineHeight: '1' }],         // 48px - display text
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}