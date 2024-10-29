import aspectRatio from '@tailwindcss/aspect-ratio';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
const { addIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['Manrope', 'sans-serif'],
			mono: ['IBM Plex Mono', 'monospace'],
		},
		extend: {
			colors: {
				terracota: {
					100: '#5b1e12',
					75: '#aa3b22',
					50: '#e7c8c1',
					25: '#f5e7e4',
					10: '#aa3b22',
				},
				folha: {
					100: '#6d4f12',
					75: '#c6982f',
					50: '#efe1c3',
					25: '#f5e7e4',
					10: '#aa3b22',
				}
			},
		},
	},

	plugins: [typography, forms, aspectRatio, addIconSelectors(['arcticons'])],
};
