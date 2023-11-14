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
      keyframes: {
        heading: {
          "25%": { transform: "translateY(50px)" },
          "50%": { transform: "translateY(100px)" },
          "75%": { transform: "translateY(150px)" },
          "100%": { transform: "translateY(200px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
