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
        theme: "#808A9F",
        primary: "#010101",
        secondary: "#99999B", 
        tertiary: "#23272F",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#808A9F",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        'xs': "450px",
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        'xs-max': {'max': '400px'},
        'xs-min': {'min': '400px'},
      },
    },
  },
  plugins: [],
};
