/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#323131",
        dark1: "#2c231d",
        dark2: "#464542",
        primaryWhite: "#F1EEFF",
        white: "#FFFFFF",
        home7Bg: "#f7f8fc",
        black: "#000000",
        red: {
          100: "#fee2e2",
          200: "#fecaca",
          300: "#FF7E84",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
        },
        yellow: {
          dark: "#FFC529",
          normal: "#ffb800",
          light: "#FFCF59",
          home8: "#feb400",
          home7: "#eaa60e",
        },
        orange:{
          main:"#FF7714",
          dark:'#FB6238',
          home8: "#ef3f0f",
          home7: "#ef4444",
          
        },
        blue: {
          main: "#0c2e60",
          darkBlue: "#525FE1",
          slateBlue: "#3D81C2",
          light: "#0166FF",
          text:'#5360E2',
          bgLight: "#f1f6f9",
          
        },
        violet: {
          300: "#B5B2E3",
          light: "#EFDEFF",
          main: "#4A3F81",
          dark: "#9747FF",
          home7: "#452871",
        },
        brick: "#F66843",
        green: {
          light: "#E0F5E9",
          lime: "#A7CE4A",
          olive:'#AFB83B',
          garden: "#56D274",
          dark: "#1FAF38",
        },
        pink: {
          light: "#FFDCE5",
          pinkLight: "#feebee",
          hotPink: "#FF5FA8",
          darkPink: "#FF1850",
          900:'#F63955',
        },
        gray:{
          dark:'#808080',
          slate:'#92AAD0',
        }
      },
    },
    fontFamily: {
      Outfit: ["Outfit", "sans-serif"],
      OpenSans: ["Open Sans", "sans-serif"],
    },
    
  },
  plugins: [],
}
