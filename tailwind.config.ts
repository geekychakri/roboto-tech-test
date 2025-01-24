import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: {
          main: "var(--background)",
        },
        textColor: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          "primary-action": "var(--text-primary-action)",
        },
        borderColor: {
          primary: "var(--border-primary)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
