/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				natosans: ['NatoSans','typeface-nato-sans' ], 
			  },
			colors: {
				header: '#E8F3F3', 
				travel:'#DFF1F0',
				},
				lineHeight:{
					'140':'140%'
				}
			
		},
	},
	plugins: [
		require('tailwind-scrollbar'),
	],
}



