import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["var(--font-roboto)"],
      },
      backgroundImage: {
        referImg: "url('/assets/img2.png')",
        getInTouchBg: "url('/assets/bgImage.png')",
      },
      boxShadow: {
        "container-shadow": "0px 4px 65px 1px #00072B36",
        "button-shadow": "0px 2px 26.6px 0px #0000002E",
      },
    },
  },
  plugins: [],
};
export default config;
