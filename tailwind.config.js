/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-mobile": "url('/images/mobile/image-hero.jpg')",
        "hero-desktop": "url('/images/desktop/image-hero.jpg')",

        // Desktop
        "desktop-deep-earth": "url('/images/desktop/image-deep-earth.jpg')",
        "desktop-curiosity": "url('/images/desktop/image-curiosity.jpg')",
        "desktop-fisheye": "url('/images/desktop/image-fisheye.jpg')",
        "desktop-from-above": "url('/images/desktop/image-from-above.jpg')",
        "desktop-grid": "url('/images/desktop/image-grid.jpg')",
        "desktop-interactive": "url('/images/desktop/image-interactive.jpg')",
        "desktop-night-arcade": "url('/images/desktop/image-night-arcade.jpg')",
        "desktop-pocket-borealis":
          "url('/images/desktop/image-pocket-borealis.jpg')",
        "desktop-soccer-team": "url('/images/desktop/image-soccer-team.jpg')",
        // Mobile
        "mobile-deep-earth": "url('/images/mobile/image-deep-earth.jpg')",
        "mobile-curiosity": "url('/images/mobile/image-curiosity.jpg')",
        "mobile-fisheye": "url('/images/mobile/image-fisheye.jpg')",
        "mobile-from-above": "url('/images/mobile/image-from-above.jpg')",
        "mobile-grid": "url('/images/mobile/image-grid.jpg')",
        "mobile-interactive": "url('/images/mobile/image-interactive.jpg')",
        "mobile-night-arcade": "url('/images/mobile/image-night-arcade.jpg')",
        "mobile-pocket-borealis":
          "url('/images/mobile/image-pocket-borealis.jpg')",
        "mobile-soccer-team": "url('/images/mobile/image-soccer-team.jpg')",
      },
      colors: {
        "dark-gray": "hsl(0, 0%, 55%)",
        "very-dark-gray": "hsl(0, 0%, 41%)",
      },
      fontFamily: {
        JosefinSans: ["Josefin Sans", "sans-serif"],
        Alata: ["Alata", "sans-serif"],
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
