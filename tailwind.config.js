module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f9fcfa",
          200: "#e8e8e8",
          300: "#dde1e6",
          500: "#a4a4a4",
          900: "#1c1c1c",
        },
        white: { A700: "#ffffff" },
        green: { 600: "#2fa364" },
      },
      fontFamily: { rubik: "Rubik" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
