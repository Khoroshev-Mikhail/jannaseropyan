/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      '_pink': '#FF83CF',
      '_purple': '#8C11F2',
      '_mainbg': '#FFE5EB',
      '_black': '#2C2B2E',
      '_white': '#ffffff',
    },
    screens: {
      'xs': '480px', // => @media (min-width: 480px) и т.д.
      'sm': '640px', 
      'md': '768px',
      'lg': '1024px',
      'maxw': '1138px', // Максимальная ширина сайта
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontSize: {
      'DEFAULT': '14px',
      'xs': '14px', 
      'sm': '14px', 
      'md': '16px',
      'lg': '18px',
      'xl': '20px',
    },
  },
  plugins: [],
}
