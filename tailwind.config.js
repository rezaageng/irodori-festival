module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'irodori-primary': '#F2E8C9',
        'irodori-secondary': '#f0e2b9',
        'irodori-tertiary': '#b68f3b',
      },
      boxShadow: {
        up: '0 -1px 3px 0 rgb(0 0 0 / 0.1), 0 -1px 2px -1px rgb(0 0 0 / 0.1);',
      },
    },
  },
  plugins: [],
};
