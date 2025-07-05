import flowbiteReact from "flowbite-react/plugin/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ".flowbite-react\\class-list.json"
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      keyframes: {
        dimlight: {
          '0%, 18%, 20%, 50.1%, 60%, 65.1%, 80%, 90.1%, 92%': {
            color: '#0e3742',
            boxShadow: 'none',
          },
          '18.1%, 20.1%, 30%, 50%, 60.1%, 65%, 80.1%, 90%, 92.1%, 100%': {
            color: '#fff',
            textShadow: '0 0 10px #03bcf4',
          },
        },
      },
      animation: {
        dimlight: 'dimlight 5s infinite',
      },
    },
  },
  plugins: [
    flowbiteReact, // Correctly placed as an element in the array
    function({ addUtilities }) {
      addUtilities({
        '.box-reflect': {
          '-webkit-box-reflect': 'below 1px linear-gradient(transparent, #0004)',
          'box-reflect': 'below 1px linear-gradient(transparent, #0004)', // Add standard property for broader compatibility
        },
      });
    },
  ],
};
   
   
