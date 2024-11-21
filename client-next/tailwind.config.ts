import { mix } from "three/webgpu";

// tailwind.config.js or tailwind.config.ts
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Updated to reflect the new folder location
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      mixBlendMode: {
        difference: "difference",
      },
    },
  },
  plugins: [],
};
