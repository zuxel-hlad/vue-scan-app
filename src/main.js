import './assets/scss/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import QrReader from 'vue3-qr-reader';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(QrReader);
app.mount('#app');
