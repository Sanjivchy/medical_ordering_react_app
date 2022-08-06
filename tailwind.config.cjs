module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        box: "0px 4px 40px rgba(0, 0, 0, 0.25)",
        "show-more-info": "0px 8px 24px rgba(0, 50, 76, 0.15)"
      },
      screens: {
        print: { raw: "print" }
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#043A27",
        black: "#001E2D",
        white: "#ffffff",
        'success':'#28A745',
        "gray-10": "#E2E5E9",
      },
      fontFamily: {
        Roboto: "'Roboto', sans-serif",
        sans: ["'Nunito'", "Open Sans", "system-ui"]
      }
    },
    plugins: []
  }
};
