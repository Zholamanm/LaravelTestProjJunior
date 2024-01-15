import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    base: '/',
    build: {
        // outDir: 'public/build', // Build files will be output here
        emptyOutDir: true, // Clears outDir on each build
    },
    publicDir: 'public', // Static assets are served from here
    plugins: [
        vue(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
