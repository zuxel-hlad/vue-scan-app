import './assets/scss/main.scss';
import { createApp } from 'vue';
import QrReader from 'vue3-qr-reader';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.use(QrReader);
app.mount('#app');
