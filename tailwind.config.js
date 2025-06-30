module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          50: "#FFEFE4",
          100: "#FCE0D0",
          200: "#F9CDB7",
        },
      },
    },
  },
  plugins: [],
};