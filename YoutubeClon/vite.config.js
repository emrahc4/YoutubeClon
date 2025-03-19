import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // theme: {
  //   extend: {
  //     colors: {
  //       primary: "#0F0F0F",
  //       secondary: "#3E403F",
  //     },
  //   },
  // },
  plugins: [react(), tailwindcss(),],
})
