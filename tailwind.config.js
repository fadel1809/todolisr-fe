/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "merah-logo": "#ff5555",
        "hover-tema": "#b53535",
        "text-landing": "#f54040",
      },
    },
  },
  plugins: [],
};
