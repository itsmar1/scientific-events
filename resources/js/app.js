require('./bootstrap');
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';
import axios from 'axios';
import VueAxios from 'vue-axios';
import i18n from './i18n/index.js';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseCard from './components/ui/BaseCard.vue';

const app = createApp(App);

app.use(VueAxios, axios);
app.use(router);
app.use(store);
app.use(i18n);

app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);

app.mount('#app');

