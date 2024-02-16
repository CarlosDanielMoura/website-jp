// tailwind-plugins.js
export default function addTextGradients({ addUtilities, theme, e }) {
  const gradients = theme("gradients", {});

  const gradientUtilities = Object.entries(gradients).map(([name, value]) => ({
    [`.${e(`text-gradient-${name}`)}`]: {
      background: value,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  }));

  addUtilities(gradientUtilities, ["responsive", "hover"]);
}
