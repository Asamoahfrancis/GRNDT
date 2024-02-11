import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-green": "linear-gradient(90deg, #19A94A 0%, #80C674 67.27%)",
        "gradient-inverse":
          "linear-gradient(90deg, #80C674 0%,#19A94A  67.27%)",

        "gradient-service":
          "linear-gradient(175deg, #F4FAF3 35.71%, rgba(244, 250, 243, 0.19) 83.46%)",
      },
      colors: {
        lightRadientGreen: "#80C674",
        darkRadianGreen: "#2AAE51",
        darkGreen: "#19A94A",
        textColor: "#6B6B6B",
      },
    },
  },
  plugins: [],
};
export default config;
