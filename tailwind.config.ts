import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "tab-wrapper-shadow": "0px 4px 6px 0px #4646461C inset",
        "tab-shadow": "6px 1px 20px 1px #00000014, 0px 1px 4px 0px #00000040",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "30%": { transform: "rotate(20deg)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "linear-gradient-yellow-to-orange":
          "linear-gradient(to right, #FFE89C, #FFB28C)",
        "linear-gradient-blue-to-pink":
          "linear-gradient(90deg, #C7F5FF 0%, #F6E3FF 100%)",
        "linear-gradient-pink-to-blue":
          "linear-gradient(90deg, #FAEFFF 2.04%, #ECF2FF 99.38%)",
        "linear-gradient-bt-black-to-white":
          "linear-gradient(180deg, rgba(102, 102, 102, 0.00) 0%, rgba(15, 15, 15, 0.86) 68.5%, #000 100%)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        backgroundBlue: "hsl(var(--background-blue))",
        foreground: "hsl(var(--foreground))",
        primary: "var(--primary)",
        midGrey: "var(--mid-grey-color)",
        darkGrey: "var(--dark-grey-color)",
        bg1: "var(--bg-1)",
        neutralLightest: "var(--neutral-lightest)",
      },
    },
    fontFamily: {
      poppins: ["var(--font-poppins)"],
      roboto: ["var(--font-roboto)"],
      pyidaungsu: ["var(--font-pyidaungsu)"],
    },
  },
  plugins: [],
};
export default config;
