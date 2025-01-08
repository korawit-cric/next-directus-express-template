import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";

export const H_NAVBAR = "96px";
const customHeight = {
  navbar: `${H_NAVBAR}`,
  "screen-excl-navbar": `calc(100vh - ${H_NAVBAR})`,
  "screen-code-content": `calc(100vh - ${H_NAVBAR} - 124px )`,
};

const customWidth = {};

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        border: "var(--border-color)",
        input: "var(--input-color)",
        ring: "var(--ring-color)",
        background: "var(--background-color)",
        foreground: "var(--foreground-color)",
        primary: {
          DEFAULT: "var(--primary-color)",
          foreground: "var(--primary-foreground-color)",
        },
        secondary: {
          DEFAULT: "var(--secondary-color)",
          foreground: "var(--secondary-foreground-color)",
        },
        destructive: {
          DEFAULT: "var(--destructive-color)",
          foreground: "var(--destructive-foreground-color)",
        },
        muted: {
          DEFAULT: "var(--muted-color)",
          foreground: "var(--muted-foreground-color)",
        },
        text: {
          DEFAULT: "var(--text-color)",
          foreground: "var(--text-foreground-color)",
        },
        popover: {
          DEFAULT: "var(--popover-color)",
          foreground: "var(--popover-foreground-color)",
        },
        card: {
          DEFAULT: "var(--card-color)",
          foreground: "var(--card-foreground-color)",
        },
        watermark: {
          DEFAULT: "var(--watermark-color)",
        },
        "sub-text": {
          DEFAULT: "var(--sub-text-color)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      minHeight: {
        ...customHeight,
      },
      maxHeight: {
        ...customHeight,
      },
      height: {
        ...customHeight,
      },
      minWidth: {
        ...customHeight,
      },
      maxWidth: {
        ...customHeight,
      },
      width: {
        ...customWidth,
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwindcss-animate"),
    plugin(({ addUtilities }) => {
      addUtilities({
        ".center": {
          "@apply flex justify-center items-center": {},
        },
      });
    }),
  ],
} satisfies Config;

export default config;
