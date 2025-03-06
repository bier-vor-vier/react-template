import {defineConfig} from 'vite'
import tailwindcss from "@tailwindcss/vite";
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(), tsconfigPaths()],
    build: {
        cssCodeSplit: true,
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ['react', 'react-dom', 'react-redux', 'lucide-react', 'framer-motion', 'i18next', 'zod', 'react-hook-form'],
                },
            }
        },
    },
    base: '/react-template/',
    test: {
        globals: true,
        environment: 'jsdom',
    },
})
