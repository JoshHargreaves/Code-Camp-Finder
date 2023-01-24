/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
      extend: {
        colors: {
          'custom-primary': '#FFCACA',
          'custom-secondary': '#FFFFFF',
          'custom-background': '#251B37',
          'custom-tertiary': '#FFECEF',
          'custom-four': '#372948'
        },
      },
  },
  plugins: [],
}
