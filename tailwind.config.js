/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*/.jsx"],
  // Otras configuraciones...
  theme: {
      extend: {
          colors: {
              primary: "#fea928",
              secondary: "#ed8900",
          },
          container: {
              center: true,
              padding: {
                  DEFAULT: "1rem",
                  sm: "3rem",
              },
          },
      },
  },
};