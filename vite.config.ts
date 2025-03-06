import {defineConfig} from 'vite'
import tailwindcss from "@tailwindcss/vite";
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import copy from 'rollup-plugin-copy'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        tsconfigPaths(),
        copy({
            targets: [
                {src: 'src/features/**/i18n/*.json', dest: './dist/assets'},
                {src: 'src/app/i18n/*.json', dest: './dist/assets'}
            ],
            flatten: false,
            verbose: true,
            hook: 'writeBundle'
        }),
    ],
    build: {
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
