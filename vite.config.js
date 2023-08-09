import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuePugPlugin from 'vue-pug-plugin';

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @import "@/assets/scss/_variables.scss";
                `,
            },
        },
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    plugins: [
        vue({
            template: {
                preprocessOptions: {
                    plugins: [vuePugPlugin],
                },
            },
        }),
    ],
});
