import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cabin", ...defaultTheme.fontFamily.sans]
      },
			colors: {
				"darkGray": "#111111",
				"lightGray": "#7E7E7E",
				"brightGray": "#EDEDED"
			}
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
