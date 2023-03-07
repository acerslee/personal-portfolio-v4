/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			black: '#000000',
			ebony: '#04060d',
			'gray-dark': '#273444',
			iron: '#d3d4d7',
			gray: '#8492a6',
			'gray-light': '#d3dce6',
			white: '#ffffff',
			'torea-bay': '#143aa2',
			'royal-blue': '#3e8de3',
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		extend: {},
	},
	plugins: [],
}
