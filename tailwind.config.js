/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ["New Spirit", "serif"],
        sans: ["Neue Haas Grotesk Display Pro", "sans-serif"],
      },
      colors: {
        "green": "#65D45C", // Principal/verde
        "blue": "#0D2823", // Principal/Azul oscuro
        "medium-blue": "#044348", // Principal/Azul medio
        "gray-light": "#ECECEC", // Secundarios/Gris Claro
        "gray-dark": "#6C6C6C", // Secundarios/Gris oscuro
        "gray": "#F1EEEC", // Secundarios/Beige
      },
      accentColor: "#65D45C"
    },
  },
  plugins: [],
}

