/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dcyanPrimary: "hsl(180, 66%, 49%)",
        dvioletPrimary: "hsl(257, 27%, 26%)",
        dredAccent: "hsl(0, 87%, 67%)",
        dgrayNeutral: "hsl(0, 0%, 75%)",
        dvioletGrayNeutral: "hsl(257, 7%, 63%)",
        ddarkBlueNeutral: "hsl(255, 11%, 22%)",
        ddarkVioletNeutral: "hsl(260, 8%, 14%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
