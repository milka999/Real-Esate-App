/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./components/*.jsx", "./src/*.{jsx, css}", "./index.html"],
  theme: {
    extend: {
      color: {
        black: "#151515",
        white: "ffffff",
        green: "#95e347",
        gray: "daf2c3",
      },
    },
  },
  plugins: [],
};
