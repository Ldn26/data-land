/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tomorrow: ['Tomorrow', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary : "#057876" ,
        darkprimary : "#064746" , 
        secendary : "#1C1E1E" ,
        
        // primaryLight : "#0000004D"
      },
    },
  },
  plugins: [],
};
