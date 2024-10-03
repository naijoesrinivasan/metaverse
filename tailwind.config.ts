import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7'
      },
      fontFamily: {
        eudoxus: ["Eudoxus-Sans", "sans-serif"]
      },
      blur: {
        blur01: '125px',
        blur02: '190px'
      }
    },
  },
  plugins: [],
};
export default config;
