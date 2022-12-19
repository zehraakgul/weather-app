module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "extra-cold": "linear-gradient(to left bottom, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))",
        "cold": "linear-gradient(to right, rgb(29, 78, 216), rgb(30, 64, 175), rgb(17, 24, 39))",
        "mild": "linear-gradient(to top, rgb(251, 146, 60), rgb(56, 189, 248))",
        "hot": "radial-gradient(at left bottom, rgb(202, 138, 4), rgb(220, 38, 38))",
        "main-menu":"linear-gradient(to left, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))",
        "city-list": "linear-gradient(to left top, rgb(17, 24, 39), rgb(88, 28, 135), rgb(124, 58, 237))",
      },
      colors: {
        "weather-primary": "#00668A",
        "weather-secondary": "#004E71",
      },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
};
