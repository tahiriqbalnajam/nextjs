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
        'salmon-svg': "url('images/salmon.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        salmon: '#FF5A5E',
      },
      customClass: {
        btnred: {
          backgroundColor: '#f2f2f2',
          color: '#000',
          fontSize: '20px',
          padding: '1rem',
        },
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        '.btn-red': {
          backgroundColor: '#FF5A5E',
          color: '#fff',
        },
        '.allmainsliders button div svg': {
          position: 'absolute',
          left: '-34px',
          top: '163px',
          fontsize: '32px',
          fontweight: '600',
          width: '16px',
          color: '#ff5a5e',
        },
      });
    },
  ],
};
