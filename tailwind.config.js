/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "1/5": "1fr 5fr",
      },
    },
  },
  plugins: [require("daisyui"), require("@headlessui/tailwindcss")],
  daisyui: {
    // themes: false,
  },
};
