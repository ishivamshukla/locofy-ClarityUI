/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
        "ibm-plex-sans": "'IBM Plex Sans'",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
      },
    },
    colors: {
      white: "#fff",
      gray: { "100": "#a1a1aa", "200": "#71717a", "300": "#18181b" },
      black: "#000",
    },
    fontSize: { xs: "14px", sm: "16px", base: "18px" },
  },
  corePlugins: { preflight: false },
};
