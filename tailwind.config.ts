/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
        "accent": "var(--accent)",
        "neutral": "var(--neutral)",
        "base": "var(--base)",
        "info": "var(--info)",
        "success": "var(--success)",
        "warning": "var(--warning)",
        "error": "var(--error)",
      },
    },  
  },
  plugins: [],
};
