/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // If using app directory
    "./pages/**/*.{js,ts,jsx,tsx}", // For pages dir
    "./components/**/*.{js,ts,jsx,tsx}", // For your components
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['"Pacifico"', 'cursive'],
        unbounded: ['"Unbounded"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
