/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Lora", "Georgia", "serif"],
        sans:  ["DM Sans", "sans-serif"],
      },
      colors: {
        terra:  "#c4622d",
        bark:   "#2d1a0e",
        clay:   "#7a4520",
        straw:  "#e8d5be",
        cream:  "#fdf6ee",
        leaf:   "#fffbf5",
        olive:  "#5a6e3a",
        gold:   "#d4a044",
        smoke:  "#f5ede2",
      },
      animation: {
        "fade-up":  "fadeUp 0.8s ease-out both",
        "fade-in":  "fadeIn 0.6s ease both",
        "sway":     "sway 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: { from: { opacity: "0", transform: "translateY(24px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
        sway:   { "0%,100%": { transform: "rotate(-2deg)" }, "50%": { transform: "rotate(2deg)" } },
      },
    },
  },
  plugins: [],
};
