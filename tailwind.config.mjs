/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#94527e",
        secondary: "#bca0de",
        border: "#3e404a",
        "border-light": "#8b8987",
        "background-light": "#282a36",
        background: "#21222c",
      },
      keyframes: {
        blink: {
          to: {
            visibility: "hidden",
          },
        },
        slideFadeLeft: {
          from: {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        slideFadeRight: {
          from: {
            transform: "translateX(100%)",
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        grow: {
          from: {
            width: "0%",
          },
          to: {
            width: "100%",
          },
        },
        wiggle: {
          "0%,10%,20%": {
            transform: "rotate(-2deg)",
          },
          "5%,15%": {
            transform: "rotate(2deg)",
          },
          "21%, 100%": {
            transform: "rotate(0deg)",
          },
        },
      },
      animation: {
        blink: "blink 1s steps(5, start) infinite",
        "slide-fade-left": "slideFadeLeft 0.5s",
        "slide-fade-right": "slideFadeRight 0.5s",
        grow: "grow 1s",
        wiggle: "wiggle 1.5s infinite",
        progress: "grow 1s forwards",
      },
      boxShadow: {
        centered: "0 0 25px 0px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [],
};
