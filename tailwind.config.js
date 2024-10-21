/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pCyan: "hsl(180, 66%, 49%)",
        pDarkViolet: "hsl(257, 27%, 26%)",
        sRed: "hsl(0, 87%, 67%)",
        nGray: "hsl(0, 0%, 75%)",
        nGrayishViolet: "hsl(257, 7%, 63%)",
        nVeryDarkBlue: "hsl(260, 11%, 22%)",
        nVeryDarkViolet: "hsl(260, 8%, 14%)",
      },
    },
  },
  plugins: [],
};

/*
## Colors
### Primary
- Cyan: hsl(180, 66%, 49%)
- Dark Violet: hsl(257, 27%, 26%)
### Secondary
- Red: hsl(0, 87%, 67%)
### Neutral
- Gray: hsl(0, 0%, 75%)
- Grayish Violet: hsl(257, 7%, 63%)
- Very Dark Blue: hsl(255, 11%, 22%)
- Very Dark Violet: hsl(260, 8%, 14%)
*/
