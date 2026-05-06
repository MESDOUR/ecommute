import { colors, typography } from './tokens';

module.exports = {
	purge: ['./app/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],
	theme: {
		extend: {
			colors: {
				primary: colors.primary,
				neutral: colors.neutral,
				success: colors.success,
				warning: colors.warning,
				error: colors.error,
			},
			fontFamily: typography.fontFamily,
			fontSize: typography.fontSize,
		},
	},
	variants: {},
	plugins: [],
};
