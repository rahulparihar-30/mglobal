// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#1A1A1A",
          gold: "#E6B400",
          green: "#00B894",
          gray: "#CCCCCC",
          white: "#F5F5F5",
        },
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
}
