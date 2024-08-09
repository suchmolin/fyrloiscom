const flowbite = require("flowbite-react/tailwind")
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    fontFamily: {
      customFont: ["lato", "eastmanromanblack"],
      // Add more custom font families as needed
    },
  },
  plugins: [flowbite.plugin()],
}
