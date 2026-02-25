/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // important for scalability
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4F46E5",
          dark: "#3730A3",
          light: "#E0E7FF",
        },
        accent: {
          DEFAULT: "#7C3AED",
          light: "#F3E8FF",
        },
        success: {
          DEFAULT: "#22C55E",
          light: "#DCFCE7",
        },
        danger: "#EF4444",
        background: "#0F172A",
        surface: "#1E293B",
        border: "#334155",
        text: {
          primary: "#F1F5F9",
          secondary: "#94A3B8",
        },
      },
    },
  },
  plugins: [],
};
