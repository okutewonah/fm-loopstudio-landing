/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-mobile": "url('/images/mobile/image-hero.jpg')",
        "hero-desktop": "url('/images/desktop/image-hero.jpg')",
      },
      colors: {
        "dark-gray": "hsl(0, 0%, 55%)",
        "very-dark-gray": "hsl(0, 0%, 41%)",
      },
      fontFamily: {
        JosefinSans: ["Josefin Sans", "sans-serif"],
        Alata: ["Alata", "sans-serif"],
      },
    },
  },
  plugins: [],
};
