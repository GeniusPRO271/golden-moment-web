import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#363636', // Custom primary color
        subtitle: "#ADADAD",
        lightgold: '#D9C590',
        secondary: '#242F40', // Custom secondary color
        foreground: "#E5E5E5",
        gold: "#CCA43B"

      },
    },
  },
  plugins: [],
};
export default config;
