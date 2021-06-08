require('./bootstrap');
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';
import axios from 'axios';
import VueAxios from 'vue-axios';
import i18n from './i18n/index.js';

const app = createApp(App);

app.use(VueAxios, axios);
app.use(router);
app.use(store);
app.use(i18n);

app.mount('#app');

