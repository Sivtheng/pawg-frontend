import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EF9C66',
        secondary: '#FCDC94',
        accent: '#C8CFA0',
        muted: '#78ABA8',
      },
      fontFamily: {
        suse: ['SUSE', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
