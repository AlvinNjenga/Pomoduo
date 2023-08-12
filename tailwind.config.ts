import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        "matte-red": "#BA4949",
        "matte-green": "#41858A",
        "matte-blue": "#397097",
        "light-highlight": "rgba(255, 255, 255, 0.1)",
        "lighter-highlight": "rgba(255, 255, 255, 0.2)",
        "dark-highlight": "rgba(0, 0, 0, 0.15)",
      },
    }
  },
  plugins: [],
} satisfies Config