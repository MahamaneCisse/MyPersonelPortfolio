/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBg: "#cfd6ff",
        secondaryBg: "#ffffff",
        primaryTxt: "#030303",
        linkColor: "#2320208d",
      },

      screens: {
        xs: "450px",
        sm: "790px",
      },

      fontFamily: {
        rubik: "'Rubik Glitch Pop', system-ui;",
        play: "Play",
      },
      backgroundImage:{
        "bgimg" : "url('bgimg.jpeg')",
      }
    },
  },
  plugins: [],
};
