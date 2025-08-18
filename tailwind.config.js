// ==============================
// tailwind.config.js (agregar este archivo en la raíz del proyecto)
// ==============================
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ajusta según tu estructura
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C6187",   // Azul del logo
        secondary: "#FFCC99", // Beige cálido
        accent: "#F6E4D4",    // Fondo suave original del logo
        neutral: {
          dark: "#333333",
          light: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
