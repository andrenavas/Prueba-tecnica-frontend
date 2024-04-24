/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.jsx'],
  // Otras configuraciones...
  theme: {
    extend: {
        colors: {
            primary: "#ffab5a",
            secondary: "#f41ea",
            tertiary: "#3f8363", 
        },
        fontFamily: {
            sans: ['"Poppins"', 'sans-serif'],
        },
        textColor: {
            DEFAULT: "#333333",
            primary: "#ffab5a", 
            secondary: "#f41ea",
            tertiary: "#3f8363", 
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

