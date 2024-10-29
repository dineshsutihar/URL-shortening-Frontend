/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyanPrimary: "hsl(180, 66%, 49%)",
        violetPrimary: "hsl(257, 27%, 26%)",
        redAccent: "hsl(0, 87%, 67%)",
        grayNeutral: "hsl(0, 0%, 75%)",
        violetGrayNeutral: "hsl(257, 7%, 63%)",
        darkBlueNeutral: "hsl(255, 11%, 22%)",
        darkVioletNeutral: "hsl(260, 8%, 14%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
