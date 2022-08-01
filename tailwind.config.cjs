/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				'cursive': ['Carter One', 'cursive'],
				'display': ['Open Sans', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
