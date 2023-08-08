import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuePugPlugin from 'vue-pug-plugin';

// https://vitejs.dev/config/
export default defineConfig({
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
