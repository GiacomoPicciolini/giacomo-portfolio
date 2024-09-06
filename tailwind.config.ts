import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textShadow: {
        lg: '1px 1px 1px rgba(0, 0, 0, 0.3)',
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3.5rem',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
export default config;
