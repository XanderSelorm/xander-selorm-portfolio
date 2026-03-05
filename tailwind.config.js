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
				sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
				mono: ['Space Mono', 'ui-monospace', 'SF Mono', 'Monaco', 'Cascadia Code', 'Menlo', 'Consolas', 'monospace'],
			},
			colors: {
				'gray-text': '#333333',
				background: 'rgb(var(--background)  / <alpha-value>)',
				foreground: 'rgb(var(--foreground)  / <alpha-value>)',
				card: {
					DEFAULT: 'rgb(var(--card)               / <alpha-value>)',
					foreground: 'rgb(var(--card-foreground)    / <alpha-value>)',
				},
				popover: {
					DEFAULT: 'rgb(var(--popover)            / <alpha-value>)',
					foreground: 'rgb(var(--popover-foreground) / <alpha-value>)',
				},
				primary: {
					DEFAULT: 'rgb(var(--primary)            / <alpha-value>)',
					foreground: 'rgb(var(--primary-foreground) / <alpha-value>)',
				},
				secondary: {
					DEFAULT: 'rgb(var(--secondary)            / <alpha-value>)',
					foreground: 'rgb(var(--secondary-foreground) / <alpha-value>)',
				},
				muted: {
					DEFAULT: 'rgb(var(--muted)            / <alpha-value>)',
					foreground: 'rgb(var(--muted-foreground) / <alpha-value>)',
				},
				accent: {
					DEFAULT: 'rgb(var(--accent)            / <alpha-value>)',
					foreground: 'rgb(var(--accent-foreground) / <alpha-value>)',
				},
				destructive: {
					DEFAULT: 'rgb(var(--destructive)            / <alpha-value>)',
					foreground: 'rgb(var(--destructive-foreground) / <alpha-value>)',
				},
				border: 'rgb(var(--border) / <alpha-value>)',
				input: 'rgb(var(--input)  / <alpha-value>)',
				ring: 'rgb(var(--ring)   / <alpha-value>)',
				chart: {
					'1': 'rgb(var(--chart-1) / <alpha-value>)',
					'2': 'rgb(var(--chart-2) / <alpha-value>)',
					'3': 'rgb(var(--chart-3) / <alpha-value>)',
					'4': 'rgb(var(--chart-4) / <alpha-value>)',
					'5': 'rgb(var(--chart-5) / <alpha-value>)',
				},
			},
			fontSize: {
				xs: ['0.75rem', { lineHeight: '1rem' }],
				sm: ['0.875rem', { lineHeight: '1.25rem' }],
				base: ['1rem', { lineHeight: '1.5rem' }],
				lg: ['1.125rem', { lineHeight: '1.75rem' }],
				xl: ['1.25rem', { lineHeight: '1.75rem' }],
				'2xl': ['1.5rem', { lineHeight: '2rem' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
				'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
				'5xl': ['3rem', { lineHeight: '1' }],
				'6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
				'7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				xl: 'calc(var(--radius) + 4px)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}
