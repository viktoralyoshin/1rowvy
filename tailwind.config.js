/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': ['"Plus Jakarta Sans"'],
    },
    backgroundImage: {
      'page': "url('background.svg')",
    },
  },
  plugins: [],
}

