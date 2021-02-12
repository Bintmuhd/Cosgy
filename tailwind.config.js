module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			body: [' Helvetica Neue'],
		},
		colors: {
			borderColor: ' #d2d7df',
			activeHover: '#1254FF',
			activeborder: ' #aacbff',
			fontColor: ' #2A2941',
			textHover: '#FFFFFF',
		},
		spacing: {
			teeny: '4px',
			tiny: '8px',
			small: '16px',
			medium: '24px',
			large: '32px',
		},
		lineHeight: {
			small: '22px',
			medium: '24px',
			large: '32px',
		},
		fontSize: {
			small: '14px',
			medium: '16px',
			large: '24px',
		},
		borderRadius: {
			large: '5px',
			small: '2px',
		},
	},
	variants: {
		extend: {
			backgroundColor: ['focus', 'hover', 'active'],
		},
	},
	plugins: [],
};
