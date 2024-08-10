/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        desktop: "1245px",
        mobile: "375px",
        fullSize: "90%",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        custombg: "url('/assets/image.jpg')",
      },
      fontFamily: {
        shabnam: ["Shabnam"],
        "shabnam-fd": ["ShabnamFD"],
      },
      colors: {
        primary: "#29AFBD",
        background: "#ECEAEF",
        blurground: "#B9B2C2",
        "primary-hover": "29AFBD",
        placeholder: "#B6ADC2",
        list: "#9689A8",
        dark: "#42246E",
        fillShadow: "#42246E",
      },
      fontSize: {
        xxs: "0.65rem",
        "3xs": "0.55rem",
      },
    },
  },
  plugins: [],
};
