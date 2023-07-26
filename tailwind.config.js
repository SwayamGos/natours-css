/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    screens: {
      'xl': {'min': '1800px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1200px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '900px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '600px'},
      // => @media (max-width: 639px) { ... }
    },
    
    extend: {
      colors: {
        "color-primary": "#55c57a",
        "color-primary-light": "#7ed56f",
        "color-primary-dark": "#28b485",
        "gray-light-1": "#f7f7f7",
        "color-secondary-light": "#ffb900",
        "color-secondary-dark": "#ff7730",
        "color-tertiary-light": "#2998ff",
        "color-tertiary-dark": "#5643fa",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
