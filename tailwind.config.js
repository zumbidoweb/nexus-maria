/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
    darkMode: ["class"],
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./content/**/*.{md,mdx}",
    ],
    theme: {
        extend: {
            typography: ({ theme }) => ({ 
                DEFAULT: {
                    css: {
                        '--tw-prose-body': colors.gray[800],
                        '--tw-prose-headings': colors.gray[900],
                        '--tw-prose-lead': colors.gray[600],
                        '--tw-prose-links': colors.gray[900],
                        '--tw-prose-bold': colors.gray[900],
                        '--tw-prose-counters': colors.gray[500],
                        '--tw-prose-bullets': colors.gray[300],
                        '--tw-prose-hr': colors.gray[200],
                        '--tw-prose-quotes': colors.gray[900],
                        '--tw-prose-quote-borders': colors.gray[200],
                        '--tw-prose-captions': colors.gray[500],
                        '--tw-prose-kbd': colors.gray[900],
                        '--tw-prose-kbd-shadows': colors.gray[900],
                        '--tw-prose-code': colors.gray[900],
                        '--tw-prose-pre-code': colors.gray[200],
                        '--tw-prose-pre-bg': colors.gray[800],
                        '--tw-prose-th-borders': colors.gray[300],
                        '--tw-prose-td-borders': colors.gray[200],
                        '--tw-prose-invert-body': colors.gray[300],
                        '--tw-prose-invert-headings': colors.white,
                        '--tw-prose-invert-lead': colors.gray[400],
                        '--tw-prose-invert-links': colors.white,
                        '--tw-prose-invert-bold': colors.white,
                        '--tw-prose-invert-counters': colors.gray[400],
                        '--tw-prose-invert-bullets': colors.gray[600],
                        '--tw-prose-invert-hr': colors.gray[700],
                        '--tw-prose-invert-quotes': colors.gray[100],
                        '--tw-prose-invert-quote-borders': colors.gray[700],
                        '--tw-prose-invert-captions': colors.gray[400],
                        '--tw-prose-invert-kbd': colors.white,
                        '--tw-prose-invert-kbd-shadows': colors.white,
                        '--tw-prose-invert-code': colors.white,
                        '--tw-prose-invert-pre-code': colors.gray[300],
                        '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
                        '--tw-prose-invert-th-borders': colors.gray[600],
                        '--tw-prose-invert-td-borders': colors.gray[700],
                    },
                },
            }),  
            container: ({ theme }) => ({
                center: true,
                padding: {
                    DEFAULT: theme('spacing.6'),
                    sm: theme('spacing.6'),
                    md: theme('spacing.8'),
                    lg: theme('spacing.10'),
                    xl: theme('spacing.12'),
                    '2xl': theme('spacing.24')
                },
            }),
            fontFamily: {
                serif: ['var(--font-serif)'],
                sans: ['var(--font-sans)']
            },
            colors: {
                gray: colors.neutral

            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0'
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)'
                    }
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)'
                    },
                    to: {
                        height: '0'
                    }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            }

        }
    },
    plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
};
