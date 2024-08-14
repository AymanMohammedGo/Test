/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007B8D",
        secondary: "#2F3146",
      },
      boxShadow: {
        custom: "0px 2px 20px 4px #1E146A0D",
      },
    },
  },
  plugins: [],
};
