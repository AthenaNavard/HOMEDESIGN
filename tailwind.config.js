/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"], // اطمینان حاصل کنید که مسیر صحیح است
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: ["DM Serif Display", "serif"], // برای هر فونت خانواده مناسب قرار دهید
      secondary: ["Jost", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero" : "url('/image/hero/hero.jpg')", // استفاده از backgroundImage برای تصاویر پس‌زمینه
        "grid" : "url('/image/work/grid.png')",
      },
      colors: {
        primary: {
          DEFAULT: "#292f36",
          hover: "#343e4a",
        },
        secondary: "#4d5053",
        accent: {
          DEFAULT: "#cda274",
          secondary: "#f4f0ec",
          hover: "#b88c5d",
        },
      },
    },
  },
  plugins: [],
};
