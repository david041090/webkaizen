const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#DBEBFF",
          100: "#BDDBFF",
          200: "#7AB6FF",
          300: "#3892FF",
          400: "#006EF5",
          500: "#004EB0",
          600: "#00408F",
          700: "#00306B",
          800: "#002047",
          900: "#001024",
          950: "#00070F",
        },
        complemento: {
          50: "#E8FCFB",
          100: "#D6FAF8",
          200: "#A8F5F0",
          300: "#7EF1E9",
          400: "#51ECE1",
          500: "#27E7D9",
          600: "#15C1B5",
          700: "#10938A",
          800: "#0B605B",
          900: "#06322F",
          950: "#031716",
        },
        secondary: {
          50: "#E9F6FC",
          100: "#D2EDF9",
          200: "#AADDF3",
          300: "#7DCBED",
          400: "#55BBE7",
          500: "#2AAAE1",
          600: "#1A8BBC",
          700: "#14678B",
          800: "#0D465E",
          900: "#06212D",
          950: "#031116",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 110, 245, 0.1), 0 2px 4px -1px rgba(0, 110, 245, 0.06)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      }
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: "#3d62f4",
            secondary: "#666666",
            complemento: "#f97316"
          }
        },
        dark: {
          colors: {
            primary: "#6687f7",
            secondary: "#818181",
            complemento: "#fb923c"
          }
        },
      },
    }),
  ],
} 