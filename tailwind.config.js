/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'new_black': '#18181B',
        'border_black': '#29292C',
    }
  },
  },
  plugins: [],
}