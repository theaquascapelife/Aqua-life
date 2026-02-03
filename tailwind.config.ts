import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlack: "rgb(var(--brand-black) / <alpha-value>)",
        brandAqua: "rgb(var(--brand-aqua) / <alpha-value>)",
        brandAquaLight: "rgb(var(--brand-aqua-light) / <alpha-value>)",
      },
    },
  },
  plugins: [animate],
};

export default config;

