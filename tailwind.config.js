/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '360px',
        'xs': '430px'
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      colors: {
        'cornSilk-50': 'var(--cornSilk-50)',
        'cornSilk-100': 'var(--cornSilk-100)',
        'cornSilk-200': 'var(--cornSilk-200)',
        'cornSilk-300': 'var(--cornSilk-300)',
        'cornSilk-400': 'var(--cornSilk-400)',
        'cornSilk-500': 'var(--cornSilk-500)',
        'cornSilk-600': 'var(--cornSilk-600)',
        'cornSilk-700': 'var(--cornSilk-700)',
        'cornSilk-800': 'var(--cornSilk-800)',
        'cornSilk-900': 'var(--cornSilk-900)',
        'cornSilk-950': 'var(--cornSilk-950)',
        'dark': {
          'cornSilk-50': 'var(--cornSilk-dark-50)',
          'cornSilk-100': 'var(--cornSilk-dark-100)',
          'cornSilk-200': 'var(--cornSilk-dark-200)',
          'cornSilk-300': 'var(--cornSilk-dark-300)',
          'cornSilk-400': 'var(--cornSilk-dark-400)',
          'cornSilk-500': 'var(--cornSilk-dark-500)',
          'cornSilk-600': 'var(--cornSilk-dark-600)',
          'cornSilk-700': 'var(--cornSilk-dark-700)',
          'cornSilk-800': 'var(--cornSilk-dark-800)',
          'cornSilk-900': 'var(--cornSilk-dark-900)',
          'cornSilk-950': 'var(--cornSilk-dark-950)',
        },

        'blue-dark-500': 'var(--blue-dark-500)',
        'blue-dark-600': 'var(--blue-dark-600)',
        'blue-dark-700': 'var(--blue-dark-700)',
        'blue-dark-800': 'var(--blue-dark-800)',
        'blue-dark-900': 'var(--blue-dark-900)',
        'blue-dark-950': 'var(--blue-dark-950)',
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
