/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sansita: ['"Sansita Swashed"', 'cursive'],
        neonderthaw: ['Neonderthaw', 'cursive'],
        poppins: ['Poppins', 'cursive'],
      },
    },
  },
  plugins: [],
}

