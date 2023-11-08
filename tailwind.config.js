/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "banner-image": "url('/images/Banner.jpg')",
      }),
    },
  },
  plugins: [],
};
