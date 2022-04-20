module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: {
          cyan: "hsl(180, 66%, 49%)",
          darkVoilet: "hsl(257, 27%, 26%)",
        },
        secondary: {
          red: "hsl(0, 87%, 67%)",
        },
        neutral: {
          gray: "hsl(0, 0%, 75%)",
          grayTwo: "hsl(230, 25%, 95%)",
          grayishViolet: "hsl(257, 7%, 63%)",
          darkBlue: "hsl(255, 11%, 22%)",
          darkViolet: "hsl(260, 8%, 14%)",
        },
      },
    },
  },

  plugins: [],
};
