/** @type {import('tailwindcss').Config} */
import addTextGradients from "./tailwind-plugins";
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "footer-bg": "#1E1E1E",
        "footer-title-primary": "#FFFFFF",
        "footer-title-secudary": "#BBBBBB",
        "footer-background": "#1E1E1E",
      },
      height: {
        350: "21.875rem",
        400: "25rem",
        480: "30rem",
        600: "37.5rem",
      },
      minHeight: {
        350: "21.875rem",
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
});
