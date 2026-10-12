import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { paper: "#f8f7f4", ink: "#22221f", coral: "#ee7358", muted: "#77766f" }, boxShadow: { soft: "0 12px 35px rgba(36, 33, 28, .06)" } } },
  plugins: []
};
export default config;
