/** @type {import('tailwindcss').Config} */
import addTextGradients from "./tailwind-plugins";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "footer-bg": "#1E1E1E",
      },
      gradients: {
        custom:
          "linear-gradient(90deg, #0D292A 0%, #037277 25%, #038690 49.4%, #039DA7 75%, #03B1B1 100%)",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Literata: ["Literata", "serif"],
      },
    },
  },
  plugins: [addTextGradients],
};
