// File: vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // src 폴더 내 .js/.jsx/.ts/.tsx 전부 JSX로 처리
      include: ['src/**/*.{js,jsx,ts,tsx}'],
    }),
  ],
  resolve: {
    // import 시 확장자 생략해도 .js/.jsx/.ts/.tsx 순으로 찾아줌
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
})
